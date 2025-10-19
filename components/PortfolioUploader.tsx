import React, { useState } from "react";

export default function PortfolioUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const unsignedPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET;

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!cloudName || !unsignedPreset) {
      alert("Cloudinary variables missing. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET.");
      return;
    }

    setUploading(true);
    try {
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", unsignedPreset);

      const res = await fetch(url, {
        method: "POST",
        body: formData
      });

      const data: any = await res.json();
      if (data.secure_url) {
        setUploadedUrls(prev => [data.secure_url, ...prev]);
      } else {
        console.error("Upload failed", data);
        alert("Upload failed. Check Cloudinary preset and console for details.");
      }
    } catch (err) {
      console.error(err);
      alert("Upload error. Check console.");
    } finally {
      setUploading(false);
      (e.target as HTMLInputElement).value = "";
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Subir video / imagen (≤ 2 min)</label>
      <input
        type="file"
        accept="video/*,image/*"
        onChange={handleFile}
        className="block"
      />
      {uploading && <p className="text-sm text-gray-500">Subiendo...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {uploadedUrls.map((u) => (
          <div key={u} className="rounded overflow-hidden bg-white shadow-sm p-1">
            {u.match(/\.(mp4|webm|ogg)$/i) ? (
              <video src={u} controls className="w-full h-36 object-cover" />
            ) : (
              <img src={u} alt="uploaded" className="w-full h-36 object-cover" />
            )}
            <a href={u} target="_blank" rel="noopener noreferrer" className="block text-xs truncate mt-1">{u}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
