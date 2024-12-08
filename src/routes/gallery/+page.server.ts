import type { Image, ImageData } from "lib/Image";
import type { PageServerLoad } from "./$types";
import { readdir } from "fs/promises";
import { readFile } from "fs/promises";
import sizeOf from "image-size";

interface Category {
    name: string;
    images: Image[];
}

export const load = (async () => {
    try {
        const folders = await readdir("static/images", { withFileTypes: true });

        // Process folders into categories
        const categories: Category[] = await Promise.all(
            folders
                .filter((folder) => folder.isDirectory()) // Only process directories
                .map(async (folder) => {
                    const folderPath = `static/images/${folder.name}`;
                    const files = await readdir(folderPath, { withFileTypes: true });

                    // Load metadata
                    let metadata: ImageData[] | null = null;
                    try {
                        const metadataFile = await readFile(`${folderPath}/metadata.json`, "utf-8");
                        metadata = JSON.parse(metadataFile);
                    } catch (error) {
                        console.warn(`Failed to load metadata for folder ${folder.name}:`, error);
                    }



                    // Gather image files
                    const images: Image[] = (await Promise.all(
                        files
                            .filter((file) => file.isFile() && /\.(png|jpe?g|webp|gif)$/i.test(file.name))
                            .map(async (file) => {
                                const image = await readFile(`${folderPath}/${file.name}`);
                                const dimensions = sizeOf(image);

                                if (dimensions.height === undefined || dimensions.width === undefined) {
                                    console.warn(`Failed to get dimensions for image ${file.name}`);
                                    return null;
                                }

                                return {
                                    path: `images/${folder.name}/${file.name}`,
                                    name: file.name,
                                    width: dimensions.width,
                                    height: dimensions.height,
                                    data: metadata?.find((data) => data.name === file.name),
                                }
                            })
                    )).filter((image) => image !== null)

                    return {
                        name: folder.name,
                        images,
                    };
                })
        );


        console.log(JSON.stringify(categories, null, 2));

        return {
            categories,
        };
    } catch (error) {
        console.error("Failed to load categories:", error);
        return { categories: [] };
    }
}) satisfies PageServerLoad;