import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../lib/cloudinary";
import streamifier from "streamifier";

/**
 * Server-side upload route for small files (multipart/form-data via fetch)
 * For best performance you can use direct unsigned uploads from the browser
 * with an upload preset. This endpoint shows server-side upload example.
 */
export const config = {
  api: {
    bodyParser: { sizeLimit: "200mb" }
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    // Expecting base64 or multipart - example expects body.fileBase64 and optional folder
    const { fileBase64, folder = "bypeople/portfolio" } = req.body;

    if (!fileBase64) return res.status(400).json({ message: "Missing fileBase64" });

    const buffer = Buffer.from(fileBase64, "base64");

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        use_filename: true,
        unique_filename: false
      },
      (error: any, result: any) => {
        if (error) return res.status(500).json({ error });
        return res.status(200).json({
          url: result.secure_url,
          public_id: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format
        });
      }
    );

    streamifier.createReadStream(buffer).pipe(uploadStream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed", err });
  }
}
