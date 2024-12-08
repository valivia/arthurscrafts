export interface Image {
    path: string;
    name: string;
    width: number;
    height: number;
    data?: ImageData;
}

export interface ImageData {
    name: string;
    title: string;
    description: string;
}