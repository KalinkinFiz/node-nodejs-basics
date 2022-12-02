import { createWriteStream } from "fs";
import { stdin } from "process";
import { fileURLToPath } from "url";
import { Writable } from "stream";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

class MyWritable extends Writable {
  constructor(opr) {
    super(opr);
  }

  input = createWriteStream(path.join(__dirname, "files", "fileToWrite.txt"), {
    encoding: "utf-8",
  });

  _write(chunk, _enc, next) {
    this.input.write(chunk);
    next();
  }
}

const write = async () => {
  const writableStream = new MyWritable();
  stdin.pipe(writableStream);
};

await write();
