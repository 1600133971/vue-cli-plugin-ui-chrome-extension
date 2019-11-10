module.exports = {
<%_ if (!hasElement) { _%>
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
<%_ } else { _%>
  presets: [
    '@vue/app'
  ],
<%_ } _%>
<%_ if (hasElement) { _%>
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
<%_ } _%>
}