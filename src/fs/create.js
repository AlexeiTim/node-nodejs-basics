import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  const writeTextToFile = "I am fresh and young";
  const FILE_ALREADY_EXISTS_ERROR = "FS operation failed";
  const targetFilePath = path.resolve(import.meta.dirname, "./files/fresh.txt");

  try {
    await fs.access(targetFilePath);
    throw new Error(FILE_ALREADY_EXISTS_ERROR);
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }
    await fs.writeFile(targetFilePath, writeTextToFile);
  }
};

await create();
