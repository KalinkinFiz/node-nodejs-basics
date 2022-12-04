import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { cpus } from "os";
import path from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const performCalculations = async () => {
  const promises = [];

  for (let i = 0; i < cpus().length; i++) {
    promises.push(
      new Promise((resolve, _reject) => {
        const worker = new Worker(path.join(__dirname, "worker.js"), {
          workerData: 10 + i,
        });

        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
      })
    );
  }

  Promise.all(promises).then((result) => console.log(result));
};

await performCalculations();
