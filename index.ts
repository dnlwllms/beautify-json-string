function beautify(origin: string) {
  try {
    const jsonString = JSON.stringify(JSON.parse(origin));

    let result = "",
      indent = [];

    const startPoints = ["[", "{"];
    const endPoints = ["]", "}"];

    const breakPoints = ["[", "]", "{", "}", ","];

    const isBreakPoint = (char: string) => breakPoints.includes(char);

    const isStartPoint = (char: string) => startPoints.includes(char);
    const isEndPoint = (char: string) => endPoints.includes(char);

    for (const char of jsonString) {
      if (isStartPoint(char)) {
        indent.push("\t");
        result += char;
        result += `\n${indent.join("")}`;
      } else if (isEndPoint(char)) {
        indent.pop();
        result += `\n${indent.join("")}`;
        result += char;
      } else if(isBreakPoint(char)) {
        result += char;
        result += `\n${indent.join("")}`;
      } else {
        result += char;
      }
    }

    return result;
  } catch {
    console.error("json string format is invalid");
  }
}

export default beautify;