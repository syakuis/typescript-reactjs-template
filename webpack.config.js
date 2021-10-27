const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = (env, args) => {
  const { mode, publicPath: aPublicPath, __dirbase } = env;
  const dirbase = __dirbase || __dirname;

  // url 로 접근할때 경로를 의미한다.
  // 모든 publicPath 는 통일한다.
  const publicPath = process.env.ASSET_PATH || aPublicPath || '/';

  const envPath = `./environments/.env${mode ? `.${mode}` : ''}`;

  const options = { publicPath, envPath, dirbase };

  if (mode === 'dev') {
    return dev(env, args, options);
  }

  if (mode === 'prod') {
    return prod(env, args, options);
  }

  if (mode === 'stats') {
    return prod(env, args, options, {
      plugins: [new BundleAnalyzerPlugin()],
    });
  }
};
