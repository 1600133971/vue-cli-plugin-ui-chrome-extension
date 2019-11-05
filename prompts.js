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
    name: "version",
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
    type: "confirm",
    message: "popup page",
    default: true
  },
  {
    name: "options",
    type: "confirm",
    message: "options page",
    default: true
  },
  {
    name: "csp",
    type: "confirm",
    message: "content security policy",
    default: true
  },
  {
    name: "icons",
    type: "confirm",
    message: "icons",
    default: false
  },
  {
    name: "elementui",
    type: "confirm",
    message: "element-ui",
    default: false
  },
  {
    name: "zip",
    type: "confirm",
    message: "zip dest",
    default: false
  },
  {
    name: "hotreload",
    type: "confirm",
    message: "hotreload",
    default: false
  }
];