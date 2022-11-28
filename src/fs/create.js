import fs from "fs/promises";

const CONTENT = "I am fresh and young";

const create = async () => {
  try {
    await fs.writeFile("./src/fs/files/fresh.txt", CONTENT, { flag: "wx" });
    console.log(
      "The file has been successfully created, the information has been entered"
    );
  } catch (err) {
    if (err.code === "EEXIST") {
      throw new Error("FS operation failed");
    } else {
      throw new Error(err.stack);
    }
  }
};

await create();
