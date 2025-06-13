export interface Image extends ImageMetaData {
    category: string;

    width: number;
    height: number;
}

export interface ImageMetaData {
    fileName: string;

    title?: string;
    description?: string;
    altText?: string;

    createdAtMs: number;
}

interface baseCategory {
    title: string;
    priority: number;
}

export interface categoryConfig extends baseCategory {
    images: ImageMetaData[];
}

export interface Category extends baseCategory {
    path: string;
    images: Image[];
}

export function getImageUrl(image: Image): string {
    return `/images/${image.category}/${image.fileName}`;
}