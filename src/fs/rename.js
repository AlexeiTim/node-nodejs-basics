import { promises as fs } from "fs";
import path from "path";

async function isFileExist(path) {
  try {
    await fs.access(path);
    return true;
  } catch (e) {
    return false;
  }
}

const rename = async () => {
  const targetFilePath = path.resolve(
    import.meta.dirname,
    "./files/wrongFilename.txt"
  );
  const newFilePath = path.resolve(
    import.meta.dirname,
    "./files/properFilename.md"
  );

  const targetFileExist = await isFileExist(targetFilePath);
  if (!targetFileExist) {
    throw new Error("File does not exist");
  }

  const newFileExist = await isFileExist(newFilePath);
  if (newFileExist) {
    throw new Error("File already exist");
  }

  try {
    await fs.rename(targetFilePath, newFilePath);
  } catch (e) {
    throw new Error(e);
  }
};

await rename();
