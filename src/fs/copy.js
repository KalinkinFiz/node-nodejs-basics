import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  try {
    const files = await fs.readdir(__dirname);

    if (files.includes("files_copy")) throw new Error("FS operation failed");

    await fs.cp(
      path.join(__dirname, "files"),
      path.join(__dirname, "files_copy"),
      {
        force: false,
        errorOnExist: true,
        recursive: true,
      }
    );
    console.log("All files moved to files_copy folder");
  } catch (err) {
    console.log(err.message);
  }
};

copy();
