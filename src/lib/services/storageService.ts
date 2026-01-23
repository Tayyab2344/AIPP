// Cloudinary storage implementation
// import { storage } from '../firebase'; - removed
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; - removed

export const storageService = {
    uploadFile: async (file: File, folder: string = 'insights'): Promise<string> => {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

        if (!cloudName || !uploadPreset || cloudName.includes('your_cloud_name')) {
            throw new Error("Cloudinary configuration missing. Please check .env.local");
        }

        console.log(`Starting Cloudinary upload for: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('folder', folder);

        // Ensure resource_type is handled correctly (auto for PDFs/Images)
        // Cloudinary handles this automatically usually, but explicitly setting it helps
        // formData.append('resource_type', 'auto'); 

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

            xhr.open('POST', url, true);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = (event.loaded / event.total) * 100;
                    console.log(`Upload is ${progress.toFixed(2)}% done`);
                }
            };

            xhr.onload = () => {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    console.log("Upload task completed successfully.");
                    resolve(response.secure_url);
                } else {
                    console.error("Cloudinary Upload Error:", xhr.responseText);
                    reject(new Error(`Upload failed: ${xhr.statusText}`));
                }
            };

            xhr.onerror = () => {
                console.error("Cloudinary Network Error");
                reject(new Error("Network error during upload"));
            };

            xhr.send(formData);
        });
    },

    // Maintaining uploadImage alias for compatibility
    uploadImage: async (file: File, folder: string = 'insights'): Promise<string> => {
        return storageService.uploadFile(file, folder);
    }
};
