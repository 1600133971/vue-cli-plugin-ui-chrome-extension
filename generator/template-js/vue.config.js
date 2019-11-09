const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = [
<%_ if (hasPopup) { _%>
  "popup",
<%_ } _%>
<%_ if (hasOptions) { _%>
  "options",
<%_ } _%>
<%_ if (hasOverrides) { _%>
  "newtab",
<%_ } _%>
<%_ if (hasDevtools) { _%>
  "devtools",
<%_ } _%>
];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

const manifest =
  process.env.NODE_ENV === "production" ? {
    from: path.resolve("src/manifest.production.json"),
    to: `${path.resolve("dist")}/manifest.json`
  } : {
    from: path.resolve("src/manifest.development.json"),
    to: `${path.resolve("dist")}/manifest.json`
  };

const plugins = [
  CopyWebpackPlugin([manifest])
]

<%_ if (hasBackground) { _%>
plugins.push(
  CopyWebpackPlugin([{
    from: path.resolve("src/background.js"),
    to: path.resolve("dist/background.js")
  }])
)
<%_ } _%>

<%_ if (hasIcons) { _%>
plugins.push(
  CopyWebpackPlugin([{
    from: path.resolve("src/img/icon.png"),
    to: path.resolve("dist/img/icon.png")
  }])
)
<%_ } _%>

<%_ if (hasZip) { _%>
if (process.env.NODE_ENV === 'production') {
  const ZipPlugin = require('zip-webpack-plugin')
  plugins.push(
    new ZipPlugin({
      path: path.resolve("dist"),
      filename: 'dist.zip',
    })
  )
}
<%_ } _%>

<%_ if (hasReload) { _%>
if (process.env.NODE_ENV !== 'production') {
  plugins.push(
    CopyWebpackPlugin([{
      from: path.resolve("src/utils/hot-reload.js"),
      to: path.resolve("dist")
    }])
  )
}
<%_ } _%>

<%_ if (hasContext) { _%>
  plugins.push(
    CopyWebpackPlugin([{
      from: path.resolve("src/context-menu.js"),
      to: path.resolve("dist")
    }])
  )
<%_ } _%>

<%_ if (hasContent) { _%>
  plugins.push(
    CopyWebpackPlugin([{
      from: path.resolve("src/content-script.js"),
      to: path.resolve("dist")
    }])
  )
<%_ } _%>

<%_ if (hasInject) { _%>
  plugins.push(
    CopyWebpackPlugin([{
      from: path.resolve("src/inject.js"),
      to: path.resolve("dist")
    }])
  )
<%_ } _%>

<%_ if (hasLang) { _%>
  plugins.push(
    CopyWebpackPlugin([{
      from: path.resolve(`src/locales/en/messages.json`),
      to: path.resolve(`dist/_locales/en/messages.json`)
    }])
  )

  plugins.push(
    CopyWebpackPlugin([{
      from: path.resolve(`src/locales/zh_CN/messages.json`),
      to: path.resolve(`dist/_locales/zh_CN/messages.json`)
    }])
  )
<%_ } _%>

module.exports = {
  pages: pagesObj,
  productionSourceMap: false,
  configureWebpack: {
    plugins: plugins
  },
  chainWebpack: config => {
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
};
