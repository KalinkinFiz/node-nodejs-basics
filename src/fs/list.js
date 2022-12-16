import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const folder = path.join(__dirname, "files");

const list = async () => {
  try {
    const files = await fs.readdir(__dirname);

    if (!files.includes("files")) throw new Error("FS operation failed");

    const file = await fs.readdir(folder);

    console.log("Data stored in folder:\n");
    for (const list of file) console.log(list);
  } catch (err) {
    console.log(err.message);
  }
};

await list();
