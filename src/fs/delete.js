import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, "files"));

    if (!files.includes("fileToRemove.txt"))
      throw new Error("FS operation failed");

    await fs.rm(fileToRemove, {
      force: true,
    });

    console.log("Files deleted");
  } catch (err) {
    console.log(err.message);
  }
};

await remove();
