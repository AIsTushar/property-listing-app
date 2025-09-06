import cloudinary from "../config/cloudinary";

interface UploadFile {
  buffer: Buffer;
  mimetype: string;
}

/**
 * Upload file to Cloudinary
 */
export const uploadToCloudinary = (
  file: UploadFile,
  resourceType: "image" | "video"
) => {
  return new Promise<{ url: string; publicId: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "properties", resource_type: resourceType },
      (err, result) => {
        if (err) return reject(err);
        resolve({ url: result?.secure_url!, publicId: result?.public_id! });
      }
    );
    uploadStream.end(file.buffer);
  });
};

/**
 * Delete file from Cloudinary
 */
export const deleteFromCloudinary = async (
  publicId: string,
  resourceType: "image" | "video"
) => {
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
};
