import fs from "fs";
import path from "path";

const read = async () => {
  const targetFilePath = path.resolve(
    import.meta.dirname,
    "./files/fileToRead.txt"
  );
  const readStream = fs.createReadStream(targetFilePath);
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
