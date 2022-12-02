import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import { Readable } from "stream";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

class MyReadable extends Readable {
  constructor(opr) {
    super(opr);
  }

  _read() {
    const input = createReadStream(
      path.join(__dirname, "files", "fileToRead.txt")
    );

    input.on("data", (chunk) => {
      stdout._write(chunk);
    });
  }
}

const read = async () => {
  const readableStream = new MyReadable();

  readableStream.read();
};

await read();
