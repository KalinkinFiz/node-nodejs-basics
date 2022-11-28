import fs from "fs/promises";

const CONTENT = "I am fresh and young";

const create = async () => {
  try {
    const files = await fs.readdir("./src/fs/files");

    if (files.includes("fresh.txt")) throw new Error("FS operation failed");

    await fs.writeFile("./src/fs/files/fresh.txt", CONTENT, { flag: "wx" });
    console.log(
      "The file has been successfully created, the information has been entered"
    );
  } catch (err) {
    console.log(err.message);
  }
};

await create();
