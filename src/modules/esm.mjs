import path from "path";
import fs from "fs/promises";
import os from "os";
import http from "http";
import url from "url";
import "./files/c.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const PORT = 3000;
const RANDOM = Math.random();

const aJson = path.join(__dirname, "files", "a.json");
const bJson = path.join(__dirname, "files", "b.json");

let unknownObject;

if (RANDOM > 0.5) {
  unknownObject = JSON.parse(await fs.readFile(aJson));
} else {
  unknownObject = JSON.parse(await fs.readFile(bJson));
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

const myServer = http.createServer((_req, res) => {
  res.end("Request accepted");
});

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
