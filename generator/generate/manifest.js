const generateManifest = (options, manifestPath) => {
  const fs = require("fs");
  const { version, description, name } = options;
  const manifestJson = {
    manifest_version: 2,
    name,
    description,
    version
  };

  // icons
  if (options.icons) {
    manifestJson["icons"] = {
      "16": "img/icon.png",
      "48": "img/icon.png",
      "128": "img/icon.png"
    };
  }

  // background
  if (options.background) {
    manifestJson["background"] = {
      "scripts": [
        "background.js"
      ]
    };

    if (options.reload && process.env.NODE_ENV !== 'production') {
      manifestJson["background"] = {
        "scripts": [
          "background.js", "hot-reload.js"
        ]
      };
    }
  }

  // browser_action
  if (options.browser) {
    manifestJson["browser_action"] = {
      "default_icon": options.icons ? "img/icon.png" : "",
      "default_title": "This is a Chrome demo!",
      "default_popup": "popup.html"
    };
  }

  // page_action
  if (options.page) {
    manifestJson["page_action"] = {
      "default_icon": options.icons ? "img/icon.png" : "",
      "default_title": "This is a Chrome demo!",
      "default_popup": "popup.html"
    };
  }

  // content_scripts
  if (options.content) {
    manifestJson["content_scripts"] = 
      options.element ? [{
        "matches": ["*://*.baidu.com/*"],
        "css": ["css/content.css"],
        "js": ["js/content.js"],
        "run_at": "document_end"
      }] : [{
        "matches": ["<all_urls>"],
        "js": ["content-script.js"],
        "run_at": "document_start"
      }];
  }

  // permissions
  if (options.permissions) {
    manifestJson["permissions"] = [
      "contextMenus",
      "tabs",
      "notifications",
      "webRequest",
      "webRequestBlocking",
      "storage",
      "http://*/*",
      "https://*/*"
    ];
  }

  // web_accessible_resources
  if (options.web) {
    manifestJson["web_accessible_resources"] = [
      "inject.js",
      options.element ? "fonts/*": "",
    ];
  }

  // homepage_url
  if (options.url) {
    manifestJson["homepage_url"] = "https://www.baidu.com";
  }

  // chrome_url_overrides
  if (options.overrides) {
    manifestJson["chrome_url_overrides"] = {
      "newtab": "newtab.html"
    };
  }

  // options_page
  if (options.options) {
    manifestJson["options_page"] =
      "options.html";
  }

  // options_ui
  if (options.optionsui) {
    manifestJson["options_ui"] = {
      "page": "options.html",
      "chrome_style": true
    };
  }

  // omnibox
  if (options.omnibox) {
    manifestJson["omnibox"] = {
      "keyword" : "go"
    };
  }

  // default_locale
  if (options.lang) {
    manifestJson["default_locale"] = "zh_CN";
  }

  // devtools_page
  if (options.devtools) {
    manifestJson["devtools_page"] = "devtools.html";
  }

  // content security policy
  if (options.csp) {
    manifestJson["content_security_policy"] =
      "script-src 'self' 'unsafe-eval'; object-src 'self'";
  }

  // Production build of manifest.json
  fs.writeFileSync(
    `${manifestPath}/manifest.production.json`,
    JSON.stringify(manifestJson, null, 2), {
      encoding: "utf-8"
    }
  );

  // Development build of manifest.json
  fs.writeFileSync(
    `${manifestPath}/manifest.development.json`,
    JSON.stringify(manifestJson, null, 2), {
      encoding: "utf-8"
    }
  );
};

module.exports = generateManifest;
