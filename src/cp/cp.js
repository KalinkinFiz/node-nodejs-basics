import { fileURLToPath } from "url";
import { fork } from "child_process";
import path from "path";

const args = process.argv.slice(2);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  fork(path.join(__dirname, "files", "script.js"), args, {
    stdio: [process.stdin, process.stdout, "ipc"],
  });
};

spawnChildProcess(args);
