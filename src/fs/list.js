import path from "path";
import fs from "fs/promises";

const list = async () => {
  const targetDirPath = path.resolve(import.meta.dirname, "./files");
  try {
    const files = await fs.readdir(targetDirPath);
    console.log(files);
  } catch (e) {
    throw new Error("FS ERROR");
  }
};

await list();
