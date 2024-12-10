export interface Image {
    path: string;
    name: string;
    width: number;
    height: number;
    data?: ImageData;
}

export interface ImageData {
    fileName: string;
    title: string;
    description: string;
}

interface baseCategory {
    title: string;
    priority: number;
}

export interface categoryConfig extends baseCategory {
    images: ImageData[];
}

export interface Category extends baseCategory {
    path: string;
    images: Image[];
}