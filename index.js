const fs = require("fs");
const { emojiMappings } = require("./constants/words");

function replacer(inputFile, outputFile) {
  const data = fs.readFileSync(inputFile, "utf8");
  let modified = data;

  Object.keys(emojiMappings).forEach((keyword) => {
    const rgx = new RegExp(keyword, "ig");
    modified = modified.replace(rgx, emojiMappings[keyword]);
  });

  fs.writeFileSync(outputFile, modified, "utf8");
  console.log("Keywords replaced with emojis!!");
}

replacer("input.txt", "output.txt");
