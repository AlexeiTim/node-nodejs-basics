import path from "path";
import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const targetFilePath = path.resolve(
    import.meta.dirname,
    "./files/fileToCalculateHashFor.txt"
  );
  const readStream = fs.createReadStream(targetFilePath);
  const hash = crypto.createHash("sha256");

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log("END", hash.digest("hex"));
  });
};

await calculateHash();
