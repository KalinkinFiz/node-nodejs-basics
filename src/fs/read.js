import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const fileToRead = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, "files"));

    if (!files.includes("fileToRead.txt"))
      throw new Error("FS operation failed");

    const contents = await fs.readFile(fileToRead, {
      encoding: "utf8",
    });

    console.log("Data stored in the file:\n\n", contents);
  } catch (err) {
    console.log(err.message);
  }
};

await read();
