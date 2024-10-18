function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const getNegativeNums = (str) => {
  return (str.match(/-\d+/g) || []).map((num) => num.trim());
};

const hasCustomDelimiter = (numbers) => {
  return numbers.startsWith("//");
};

export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;

  if (hasCustomDelimiter(numbers)) {
    numbers = numbers.replace("\\n", "\n");
    const parts = numbers.split("\n");
    if (parts.length > 1) {
      const customDelimiter = parts[0].slice(2);
      delimiter = new RegExp(escapeRegExp(customDelimiter), "g");
      numbers = parts.slice(1).join("\n");
    }
  } else if (numbers.includes("\\n")) {
    numbers = numbers.replace("\\n", ",");
    delimiter = /,/;
  }

  const numsArr = numbers
    .split(delimiter)
    .map((num) => num.trim())
    .filter((num) => num !== "" && !isNaN(num));

  let sum = 0;
  let negativeNumbers = [];

  for (let num of numsArr) {
    const negatives = getNegativeNums(num);
    if (negatives.length > 0) {
      negativeNumbers.push(...negatives);
    }
  }

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  sum = numsArr.map((nums)=> parseInt(nums,10)).filter((nums)=> !isNaN(nums)).reduce((acc, num) => acc + num, 0);

  return sum;
}
