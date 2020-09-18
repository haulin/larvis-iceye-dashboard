const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@error-color": "#ff6363" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
