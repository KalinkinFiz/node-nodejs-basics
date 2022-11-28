import fs from "fs/promises";

const remove = async () => {
  try {
    const files = await fs.readdir("./src/fs/files");
    if (!files.includes("fileToRemove.txt"))
      throw new Error("FS operation failed");
    await fs.rm("./src/fs/files/fileToRemove.txt", {
      force: true,
    });
    console.log("Files deleted");
  } catch (err) {
    console.log(err.message);
  }
};

await remove();
