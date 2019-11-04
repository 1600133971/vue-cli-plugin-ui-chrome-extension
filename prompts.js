module.exports = [{
    name: "name",
    type: "input",
    message: "Name of the Chrome Extension?",
    default: "chrome-extension"
  },
  {
    name: "description",
    type: "input",
    message: "Description for the Chrome Extension?",
    default: "chrome extension for ..."
  },
  {
    name: "version_no",
    type: "input",
    message: "Version for the Chrome Extension?",
    default: "0.0.1"
  },
  {
    name: "script",
    type: "list",
    message: "javascript or typescript?",
    choices: ["js", "ts"],
    default: "js"
  },
  {
    name: "popup",
    type: "list",
    message: "yes or no?",
    choices: ["yes", "no"],
    default: "yes"
  },
  {
    name: "options",
    type: "list",
    message: "yes or no?",
    choices: ["yes", "no"],
    default: "yes"
  },
  {
    name: "icons",
    type: "list",
    message: "yes or no?",
    choices: ["yes", "no"],
    default: "no"
  },
  {
    name: "element-ui",
    type: "list",
    message: "yes or no?",
    choices: ["yes", "no"],
    default: "no"
  },
  {
    name: "zip dest",
    type: "list",
    message: "yes or no?",
    choices: ["yes", "no"],
    default: "no"
  }},
  {
    name: "hot-reload",
    type: "list",
    message: "yes or no?",
    choices: ["yes", "no"],
    default: "no"
  }
];