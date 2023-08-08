// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");

const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

module.exports = (options) => {
  const config = {
    target: "node",
    entry: ["webpack/hot/poll?1000", "./src/index.ts"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      chunkFormat: "module",// HMR will fail with this chunkFormat when the source changes,which is another issue.
      // workerChunkLoading:'import'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: "main.js", autoRestart: false }),
    ],
    externalsType: "module",
    externalsPresets: {
      node: true,
    },
    experiments: {
      outputModule: true,
    },
    externals: [
      nodeExternals({
        allowlist: ["webpack/hot/poll?1000"],
        importType: "module",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: "ts-loader",
          exclude: ["/node_modules/"],
        },
      ],
    },

    optimization: { nodeEnv: false },
    node: { __filename: false, __dirname: false },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
      extensionAlias: {
        ".js": [".ts", ".js"],
        ".mjs": [".mts", ".mjs"],
      },
    },
    externalsType: "module",
    experiments: { outputModule: true },
    optimization: { nodeEnv: false },
    node: { __filename: false, __dirname: false },
  };
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
