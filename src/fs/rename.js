import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, "files"));

    if (
      !files.includes("wrongFilename.txt") ||
      files.includes("properFilename.md")
    ) {
      throw new Error("FS operation failed");
    } else {
      await fs.rename(
        path.join(__dirname, "files", "wrongFilename.txt"),
        path.join(__dirname, "files", "properFilename.md")
      );
      console.log("Files rename");
    }
  } catch (err) {
    console.log(err.message);
  }
};

await rename();
