import fs from "fs/promises";

const list = async () => {
  try {
    const files = await fs.readdir("./src/fs");

    if (!files.includes("files")) throw new Error("FS operation failed");

    const file = await fs.readdir("./src/fs/files");

    console.log("Data stored in folder:\n");
    for (const list of file) console.log(list);
  } catch (err) {
    console.log(err.message);
  }
};

await list();
