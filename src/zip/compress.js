import path from "path";
import fs from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";

const compress = async () => {
  const targetFilePath = path.resolve(
    import.meta.dirname,
    "./files/fileToCompress.txt"
  );
  const outputZipFile = "archive.gz";
  await pipeline(
    fs.createReadStream(targetFilePath),
    createGzip(),
    fs.createWriteStream(outputZipFile)
  );
  await fs.promises.unlink(targetFilePath);
};

await compress();
