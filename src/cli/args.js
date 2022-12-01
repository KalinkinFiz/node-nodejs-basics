const parseArgs = () => {
  const args = process.argv.slice(2);

  return args.reduce((previusValue, currentValue, currentIndex, array) => {
    if (currentValue.startsWith("--")) {
      const field = currentValue.slice(2);
      const value = array[currentIndex + 1] ?? null;

      if (!value || value.startsWith("--")) {
        return [...previusValue, { field, value: null }];
      }

      return [...previusValue, { field, value }];
    }

    return previusValue;
  }, []);
};

const args = parseArgs();

const output = [];
args.forEach(({ field, value }) => output.push(`${field} is ${value}`));
console.log(output.join(", "));
