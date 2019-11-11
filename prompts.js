module.exports = [{
    type: 'input',
    name: 'name',
    message: 'Name of the Chrome Extension',
    validate: input => !!input,
    group: 'Basic Options',
    default: 'chrome-extension'
  },
  {
    type: 'input',
    name: 'version',
    message: 'Version for the Chrome Extension',
    validate: input => !!input,
    group: 'Basic Options',
    default: '0.0.1'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description for the Chrome Extension',
    validate: input => !!input,
    group: 'Basic Options',
    default: '__MSG_pluginDesc__'
  },
  {
    type: 'list',
    name: 'script',
    message: 'Vue UI(devtools,newtab,options,popup) use Javascript or Typescript',
    choices: [
      { name: 'Javascript', value: 'js' },
      { name: 'Typescript', value: 'ts' }
    ],
    group: 'Basic Options',
    default: 'js',
  },
  {
    type: 'confirm',
    name: 'delete',
    message: 'Delete no use files(./src/App.vue,./src/main.js) and dir(./public,./src/assets,./src/components)',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'icons',
    message: 'Icons use for icons, browser_action, page_action in manifest.json',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'background',
    message: 'Background page for background, hot reload, badge, context-menu',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'browser',
    message: 'Add browser action for popup',
    group: 'Chrome Options',
    default: true
  },
  {
    type: 'confirm',
    name: 'page',
    message: 'Add page action for popup',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'content',
    message: 'Add content scripts for injected js',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'permissions',
    message: 'Permissions options(contextMenus, tabs, notifications, webRequest, webRequestBlocking, storage etc.)',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'web',
    message: 'Web accessible resources eg. inject.js',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'input',
    name: 'url',
    message: 'Homepage url for author eg. ad url',
    validate: input => !!input,
    group: 'Chrome Options',
    default: 'https://www.baidu.com'
  },
  {
    type: 'confirm',
    name: 'overrides',
    message: 'Chrome url overrides support newtab for Chrome Browser',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'options',
    message: 'Options page',
    group: 'Chrome Options',
    default: true
  },
  {
    type: 'confirm',
    name: 'optionsui',
    message: 'Options ui page',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'omnibox',
    message: 'Omnibox search options',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'list',
    name: 'lang',
    message: 'Choose the locale you want to load',
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
    message: 'Add devtools page',
    group: 'Chrome Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'csp',
    message: 'Content security policy options',
    group: 'Chrome Options',
    default: true
  },
  {
    when: answers => answers.background,
    type: 'confirm',
    name: 'reload',
    message: 'Hot reload modifications for nonproduction version',
    group: 'Background Options',
    default: false
  },
  {
    when: answers => answers.background && answers.permissions,
    type: 'confirm',
    name: 'context',
    message: 'Add context menu items',
    group: 'Background Options',
    default: false
  },
  {
    when: answers => answers.background,
    type: 'confirm',
    name: 'badge',
    message: 'Add badge options',
    group: 'Background Options',
    default: false
  },
  {
    when: answers => answers.background,
    type: 'confirm',
    name: 'rules',
    message: 'Add rules options',
    group: 'Background Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'element',
    message: 'Add element-ui library',
    group: 'Extend Options',
    default: false
  },
  {
    type: 'confirm',
    name: 'zip',
    message: 'Add zip dest options',
    group: 'Extend Options',
    default: false
  }
];