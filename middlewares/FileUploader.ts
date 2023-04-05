import { createClient } from "@supabase/supabase-js";

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error("SUPABASE_URL ou SUPABASE_KEY não foi definido no ambiente");
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const getFileUrl = async (path: string) => {
  const { data } = await supabase.storage.from("cv").getPublicUrl(path);

  return data.publicUrl;
};

const FileUploader = async (file: File, bucketName: string) => {
  const { data, error } = await supabase.storage.from(bucketName).upload(file.name, file);

  if (error) {
    console.error("Error uploading file:", error.message);
    return;
  }
  
  const publicUrl = data ? await getFileUrl(data.path) : null;

  return publicUrl;
};

export default FileUploader;