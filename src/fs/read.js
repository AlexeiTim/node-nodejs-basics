import path from "path";
import fs from "fs/promises";

const read = async () => {
  const targetFilePath = path.resolve(
    import.meta.dirname,
    "./files/fileToRead.txt"
  );

  try {
    const fileContent = await fs.readFile(targetFilePath, "utf-8");
    console.log(fileContent);
  } catch (e) {
    throw new Error("FS ERROR");
  }
};

await read();
