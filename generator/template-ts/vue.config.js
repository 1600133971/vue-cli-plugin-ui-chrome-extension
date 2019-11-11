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
  "mypanel",
<%_ } _%>
];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.ts`,
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

<%_ if (hasDevtools) { _%>
plugins.push(
  CopyWebpackPlugin([{
    from: path.resolve("src/devtools.html"),
    to: path.resolve("dist/devtools.html")
  }])
)

plugins.push(
  CopyWebpackPlugin([{
    from: path.resolve("src/devtools.js"),
    to: path.resolve("dist/devtools.js")
  }])
)
<%_ } _%>

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
  <%_ if (!hasElement) { _%>
  configureWebpack: {
    plugins: plugins,
  },
  <%_ } else { _%>
  configureWebpack: {
    entry: {
      'content': './src/content/index.js'
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins: plugins,
  },
  css: {
    extract: {
      filename: 'css/[name].css'
    }
  },
  <%_ } _%>

  chainWebpack: config => {
    <%_ if (hasElement) { _%>
    // 处理字体文件名，去除hash值
    const fontsRule = config.module.rule('fonts')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    fontsRule.uses.clear()
    fontsRule.test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url')
      .loader('url-loader')
      .options({
        limit: 1000,
        name: 'fonts/[name].[ext]'
      })
    <%_ } _%>
    
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
};
