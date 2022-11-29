const parseArgs = () => {
  const args = process.argv.slice(2);
  const props = [];
  const values = [];
  const out = [];

  for (let item of args) {
    if (item.includes("--")) {
      props.push(item.slice(2));
    } else {
      values.push(item);
    }
  }

  for (let i = 0; i < props.length; i++) {
    output.push(`${props[i]} is ${values[i]}`);
  }
  console.log(out.join(", "));
};

parseArgs();
