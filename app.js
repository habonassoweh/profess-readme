const fs = require("fs");
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = readmeDataArgs;
const generatePage = require("./utils/page-template");

fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Readme complete! Check out index.html to see the output!");
});
