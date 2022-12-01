import { createReadStream } from "fs";
import { createHash } from "crypto";
import { stdout } from "process";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const hash = createHash("sha256");

  const input = createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
