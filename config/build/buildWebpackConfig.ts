import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildResolve } from './buildResolve';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildDevSerever } from './buildDevServer';

export const buildWebpackCondig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;
  const isDev = mode === 'development';
  return {
    mode,

    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    devtool: isDev ? 'inline-source-map' : undefined,

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolve(options),
    devServer: isDev ? buildDevSerever(options) : undefined,
  };
};
