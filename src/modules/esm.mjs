import path from "path";
import fs from "fs";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.cjs";
import b from "./files/b.json" with { type: "json" };
import a from "./files/a.json" with { type: "json" };

const random = Math.random();
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
let unknownObject;

if (random > 0.5) {
  unknownObject = a
} else {
  unknownObject = b
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
