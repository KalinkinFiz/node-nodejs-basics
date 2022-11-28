import fs from "fs/promises";

const copy = async () => {
  try {
    await fs.cp("./src/fs/files", "./src/fs/files_copy", {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
    console.log("All files moved to files_copy folder");
  } catch (err) {
    if (err.code === "ERR_FS_CP_EEXIST") {
      throw new Error("FS operation failed");
    } else {
      throw new Error(err.stack);
    }
  }
};

copy();
