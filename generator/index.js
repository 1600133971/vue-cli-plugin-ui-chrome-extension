const generateManifest = require("./generate/manifest");
const deleteRecursive = require("./generate/deleteRecursive");
const path = require("path");

module.exports = (api, options, rootOptions) => {
  const ext = options.script;

  // create file
  api.render(`./template-${ext}`, {
    hasBackground: options.background,
    hasPopup: options.browser || options.page,
    hasOptions: options.options,
    hasZip: options.zip,
    hasIcons: options.icons,
    hasReload: options.reload,
    hasContext: options.context,
    hasContent: options.content,
    hasInject: options.web,
    hasOverrides: options.overrides,
    hasDevtools: options.devtools,
    hasLang: options.lang !== "",
    hasBadge: options.badge,
    hasElement: options.element,
  });

  const extPkg = {
    scripts: {
      "build-watch": "vue-cli-service build-watch",
      "analyze": "npm run build --report"
    },
    dependencies: {
    },
    devDependencies: {
      "copy-webpack-plugin": "^4.6.0",
    }
  };

  if (ext === "ts") {
    extPkg.devDependencies = {
      ...extPkg.devDependencies,
      "@types/chrome": "^0.0.75"
    };
  }

  if (options.zip) {
    extPkg.devDependencies = {
      ...extPkg.devDependencies,
      "zip-webpack-plugin": "^3.0.0"
    };
  }

  if (options.element) {
    extPkg.dependencies = {
      ...extPkg.dependencies,
      "element-ui": "^2.12.0"
    };

    extPkg.devDependencies = {
      ...extPkg.devDependencies,
      "babel-plugin-component": "^1.1.1"
    };
  }

  api.extendPackage(extPkg);

  api.onCreateComplete(() => {
    // delete nouse files and dir
    if (options.delete) {
      deleteRecursive(api.resolve("./public"))
      deleteRecursive(api.resolve("./src/assets"))
      deleteRecursive(api.resolve("./src/components"))
      deleteRecursive(api.resolve("./src/App.vue"))
      deleteRecursive(api.resolve("./src/main.js"))
    }

    // add manifest.json to src file
    generateManifest(options, api.resolve("./src"));
  });
};