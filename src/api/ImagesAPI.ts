import axios from "axios";

export type ImageType = {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    collections: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
};

export const ImagesAPI = (): Promise<ImageType[]> => {
    return axios
        .get('https://pixabay.com/api/?key=34412166-ee6c29a8baa79b5c022dcde95')
        .then((response) => response.data.hits)
};