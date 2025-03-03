import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import zlib from "zlib";

const decompress = async () => {
  const outputFilePath = path.resolve(
    import.meta.dirname,
    "./files/fileToCompress.txt"
  );
  const targetFilePath = path.resolve(import.meta.dirname, "../../archive.gz");
  await pipeline(
    fs.createReadStream(targetFilePath),
    zlib.createGunzip(),
    fs.createWriteStream(outputFilePath)
  );
  await fs.promises.unlink(targetFilePath);
};

await decompress();
