const rspack = require("@rspack/core");
const refreshPlugin = require("@rspack/plugin-react-refresh");
const isDev = process.env.NODE_ENV === "development";
const { codeInspectorPlugin } = require("code-inspector-plugin");

const inspectorPlugin =
  process.env.NODE_ENV === "development" &&
  codeInspectorPlugin({
    bundler: "rspack",
  });

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: {
    main: "./src/index.ts",
  },
  devServer: {
    historyApiFallback: true,
    port: 8081,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.scss$/,
        type: "css",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: {
                targets: [
                  "chrome >= 87",
                  "edge >= 88",
                  "firefox >= 78",
                  "safari >= 14",
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.container.ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./MFE": "./src/MFE",
      },
      shared: {
        react: { eager: true },
        "react-dom": { eager: true },
        "react-router-dom": { eager: true },
      },
    }),
    new rspack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: "./src/index.html",
    }),
    inspectorPlugin,
    isDev ? new refreshPlugin() : null,
  ].filter(Boolean),
};
