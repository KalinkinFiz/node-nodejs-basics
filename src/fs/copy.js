import fs from "fs/promises";

const copy = async () => {
  try {
    const files = await fs.readdir("./src/fs");
    if (files.includes("files_copy")) throw new Error("FS operation failed");
    await fs.cp("./src/fs/files", "./src/fs/files_copy", {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
    console.log("All files moved to files_copy folder");
  } catch (err) {
    console.log(err.message);
  }
};

copy();
