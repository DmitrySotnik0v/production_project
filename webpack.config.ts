import path from 'path';
import webpack from 'webpack';

import { buildWebpackCondig } from './config/build/buildWebpackConfig';

import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env:BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackCondig({
    mode: env.mode || 'development',
    paths,
    port: PORT,
  });

  return config;
};
