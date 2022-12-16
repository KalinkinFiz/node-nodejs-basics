import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const wrongFilename = path.join(__dirname, "files", "wrongFilename.txt");
const properFilename = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, "files"));

    if (
      !files.includes("wrongFilename.txt") ||
      files.includes("properFilename.md")
    )
      throw new Error("FS operation failed");

    await fs.rename(wrongFilename, properFilename);

    console.log("Files rename");
  } catch (err) {
    console.log(err.message);
  }
};

await rename();
