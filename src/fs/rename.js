import fs from "fs/promises";

const rename = async () => {
  try {
    const files = await fs.readdir("./src/fs/files");
    if (
      !files.includes("wrongFilename.txt") ||
      files.includes("properFilename.md")
    ) {
      throw new Error("FS operation failed");
    } else {
      await fs.rename(
        "./src/fs/files/wrongFilename.txt",
        "./src/fs/files/properFilename.md"
      );
      console.log("Files rename");
    }
  } catch (err) {
    console.log(err.message);
  }
};

await rename();
