const generateManifest = (options, manifestPath) => {
  const fs = require("fs");
  const { version, description, name } = options;
  const manifestJson = {
    manifest_version: 2,
    name,
    description,
    version
  };

  if (options.options) {
    manifestJson["options_page"] =
      "options.html";
  }

  if (options.browser) {
    manifestJson["browser_action"] = {
      default_popup: "popup.html"
    };
  }

  if (options.csp) {
    manifestJson["content_security_policy"] =
      "script-src 'self' 'unsafe-eval'; object-src 'self'";
  }

  // Production build of manifest.json
  fs.writeFileSync(
    `${manifestPath}/manifest.production.json`,
    JSON.stringify(manifestJson, null, 2),
    {
      encoding: "utf-8"
    }
  );

  // Development build of manifest.json
  fs.writeFileSync(
    `${manifestPath}/manifest.development.json`,
    JSON.stringify(manifestJson, null, 2),
    {
      encoding: "utf-8"
    }
  );
};

module.exports = generateManifest;
