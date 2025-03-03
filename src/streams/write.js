import path from "path";
import fs from "fs";

const write = async () => {
  const pathTargetFile = path.resolve(
    import.meta.dirname,
    "./files/fileToWrite.txt"
  );
  process.stdin.on("data", (data) => {
    const writeStream = fs.createWriteStream(pathTargetFile);
    writeStream.write(data);
    writeStream.end();

    writeStream.on("finish", () => {
      process.exit();
    });
  });
};

await write();
