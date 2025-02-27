import path from "path";
import fs from "fs/promises";

const remove = async () => {
  const targetFilePath = path.resolve(
    import.meta.dirname,
    "./files/fileToRemove.txt"
  );

  try {
    await fs.unlink(targetFilePath);
  } catch (e) {
    throw new Error("FS ERROR");
  }
};

await remove();
