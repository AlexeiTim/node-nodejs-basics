import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
  class ReverseTransform extends Transform {
    _transform(chunk, encoding, cb) {
      const reversed = chunk.toString().split("").reverse().join("");
      cb(null, reversed);
    }
  }
  process.stdin.pipe(new ReverseTransform()).pipe(process.stdout);
};

await transform();
