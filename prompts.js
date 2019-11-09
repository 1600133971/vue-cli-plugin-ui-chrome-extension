module.exports = [{
    type: 'input',
    name: 'name',
    message: 'Name of the Chrome Extension?',
    validate: input => !!input,
    group: 'Basic Options',
    default: 'chrome-extension'
  },
  {
    type: 'input',
    name: 'version',
    message: 'Version for the Chrome Extension?',
    validate: input => !!input,
    group: 'Basic Options',
    default: '0.0.1'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description for the Chrome Extension?',
    validate: input => !!input,
    group: 'Basic Options',
    default: '__MSG_pluginDesc__'
  },
  {
    type: 'list',
    name: 'script',
    message: 'javascript or typescript?',
    choices: [
      { name: 'javascript', value: 'js' }
    ],
    group: 'Basic Options',
    default: 'js',
  },
  {
    type: 'confirm',
    name: 'delete',
    message: 'delete no use files and dir',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'icons',
    message: 'icons',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'background',
    message: 'background page',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'browser',
    message: 'browser action',
    group: 'Chrome Options',
    default: true
  },
  {
    type: 'confirm',
    name: 'page',
    message: 'page action',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'content',
    message: 'content scripts',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'permissions',
    message: 'permissions',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'web',
    message: 'web accessible resources',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'input',
    name: 'url',
    message: 'homepage url',
    validate: input => !!input,
    group: 'Chrome Options',
    default: 'https://www.baidu.com'
  },
  {
    type: 'confirm',
    name: 'overrides',
    message: 'chrome url overrides',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'options',
    message: 'options page',
    group: 'Chrome Options',
    default: true
  },
  {
    type: 'confirm',
    name: 'optionsui',
    message: 'options ui',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'omnibox',
    message: 'omnibox',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'list',
    name: 'lang',
    message: 'Choose the locale you want to load?',
    choices: [
      { name: 'zh_CN', value: 'zh_CN' },
      { name: 'en', value: 'en' }
    ],
    group: 'Chrome Options',
    default: 'zh_CN',
  },
  {
    type: 'confirm',
    name: 'devtools',
    message: 'devtools page',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'csp',
    message: 'content security policy',
    group: 'Extend Options',
    default: true
  },
  {
    type: 'confirm',
    name: 'element',
    message: 'element-ui',
    group: 'Extend Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'zip',
    message: 'zip dest',
    group: 'Extend Options',
    default: false
  },
  {
    when: answers => answers.background,
    type: 'confirm',
    name: 'reload',
    message: 'hot reload',
    group: 'Extend Options',
    default: false
  },
  {
    when: answers => answers.background && answers.permissions,
    type: 'confirm',
    name: 'context',
    message: 'context menu',
    group: 'Extend Options',
    default: false
  }
];