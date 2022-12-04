import { fileURLToPath } from "url";
import { fork } from "child_process";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const scriptFiles = path.join(__dirname, "files", "script.js");
const args = process.argv.slice(2);

const spawnChildProcess = async (args) => {
  fork(scriptFiles, args, {
    stdio: [process.stdin, process.stdout, "ipc"],
  });
};

spawnChildProcess(args);
