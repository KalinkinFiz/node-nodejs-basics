import path from "path";
import url from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const pipelineAsync = promisify(pipeline);

const compress = async () => {
  const input = createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const zip = createGzip();
  const output = createWriteStream(path.join(__dirname, "files", "archive.gz"));

  try {
    await pipelineAsync(input, zip, output);
  } catch (e) {
    process.stderr.write(e.message);
    process.exit(1);
  }
};

await compress();
