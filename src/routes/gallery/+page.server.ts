import type { Category, categoryConfig, Image, ImageMetaData } from "lib/Image";
import type { PageServerLoad } from "./$types";
import { readdir, stat, writeFile } from "fs/promises";
import { readFile } from "fs/promises";
import sizeOf from "image-size";

const ROOT = "static/images"
export const load = (async () => {
    try {
        const folders = await readdir(ROOT, { withFileTypes: true });

        // Process folders into categories
        const categories: Category[] = await Promise.all(
            folders
                .filter((folder) => folder.isDirectory()) // Only process directories
                .map(async (folder) => {
                    const folderPath = `${ROOT}/${folder.name}`;
                    const files = await readdir(folderPath, { withFileTypes: true });

                    // Load metadata
                    let metadata: categoryConfig | null = null;
                    try {
                        const metadataFile = await readFile(`${folderPath}/index.json`, "utf-8");
                        metadata = JSON.parse(metadataFile);
                    } catch (error) {
                        console.warn(`Failed to load metadata for folder ${folder.name}:`, error);
                    }

                    const imageMetadata: Map<string, ImageMetaData> = new Map();

                    // Create a map for quick access to image metadata
                    if (metadata?.images) {
                        metadata.images.forEach((image) => {
                            imageMetadata.set(image.fileName, image);
                        });
                    }

                    // Gather image files
                    const images: Image[] = (await Promise.all(
                        files
                            .filter((file) => file.isFile() && /\.(png|jpe?g|webp|gif)$/i.test(file.name))
                            .map(async (file) => {
                                const imagePath = `${folderPath}/${file.name}`;
                                const image = await readFile(imagePath);
                                const dimensions = sizeOf(image);
                                const fileStat = await stat(imagePath);


                                if (dimensions.height === undefined || dimensions.width === undefined) {
                                    console.warn(`Failed to get dimensions for image ${file.name}`);
                                    return null;
                                }

                                let metadataEntry = imageMetadata.get(file.name);

                                if (!metadataEntry) {
                                    metadataEntry = {
                                        fileName: file.name,
                                        createdAtMs: Number(fileStat.ctime)
                                    };

                                    imageMetadata.set(file.name, metadataEntry);
                                }

                                return {
                                    category: folder.name,
                                    fileName: file.name,

                                    title: metadataEntry.title,
                                    description: metadataEntry.description,
                                    createdAtMs: metadataEntry.createdAtMs,

                                    width: dimensions.width,
                                    height: dimensions.height,
                                }
                            })
                    )).filter((image) => image !== null)
                        .sort((a, b) => {
                            if (!a || !b) return 0;
                            return b.createdAtMs - a.createdAtMs;
                        }
                        );

                    // Save metadata and images into the category object
                    await writeFile(`${folderPath}/index.json`, JSON.stringify({
                        title: metadata?.title ?? folder.name,
                        priority: metadata?.priority ?? 0,
                        images: Array.from(imageMetadata, data => data[1]),
                    }, null, 2));


                    return {
                        path: folder.name,
                        title: metadata?.title ?? folder.name,
                        priority: metadata?.priority ?? 0,
                        images,
                    };
                })
        )

        categories.sort((a, b) => a.priority - b.priority);

        return {
            categories,
        };
    } catch (error) {
        console.error("Failed to load categories:", error);
        return { categories: [] };
    }
}) satisfies PageServerLoad;