import webpack from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoder = {
    test: /\.s[ac]ss$/i,
    use: [
      options.mode === "development"
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName:
              options.mode === "development"
                ? "[path][name]__[local]--[hash:base64:5]"
                : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, styleLoder];
};
