const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = args.reduce((acc, arg, idx) => {
    if (idx % 2 === 0) {
      acc += `${arg.substring(2)}`;
    } else {
      acc += ` is ${arg}${idx === args.length - 1 ? "" : ", "}`;
    }
    return acc;
  }, "");
  console.log(result);
};

parseArgs();
