import fs from "fs/promises";

const read = async () => {
  try {
    const files = await fs.readdir("./src/fs/files");

    if (!files.includes("fileToRead.txt"))
      throw new Error("FS operation failed");

    const contents = await fs.readFile("./src/fs/files/fileToRead.txt", {
      encoding: "utf8",
    });

    console.log("Data stored in the file:\n\n", contents);
  } catch (err) {
    console.log(err.message);
  }
};

await read();
