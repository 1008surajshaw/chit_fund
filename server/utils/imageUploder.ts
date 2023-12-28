import { v2 as cloudinaryV2, UploadApiResponse } from 'cloudinary';

interface CloudinaryOptions {
    folder: string;
    height?: number;
    quality?: string;
    resource_type?: 'auto' | 'image' | 'video' | 'raw';
}

export const uploadImageToCloudinary = async (
    file: { tempFilePath: string },
    folder: string,
    height?: number,
    quality?: string
): Promise<UploadApiResponse> => {
    const options: CloudinaryOptions = { folder, resource_type: 'auto' };

    if (height) {
        options.height = height;
    }

    if (quality) {
        options.quality = quality;
    }

    return await cloudinaryV2.uploader.upload(file.tempFilePath, options);
};
