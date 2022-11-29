const parseEnv = () => {
  const env = Object.entries(process.env);
  console.log(
    env
      .filter((arr) => arr[0].includes("RSS_"))
      .map((arr) => arr.join("="))
      .join("; ")
  );
};

parseEnv();
