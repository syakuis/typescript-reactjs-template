const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = (env, args) => {
  const { m, mode, publicPath: aPublicPath, __dirbase } = args;
  const dirbase = __dirbase || __dirname;

  // url 로 접근할때 경로를 의미한다.
  // 모든 publicPath 는 통일한다.
  const publicPath = process.env.ASSET_PATH || aPublicPath || '/';

  const envPath = `./environments/.env${mode ? `.${mode}` : ''}`;

  const options = { m, publicPath, envPath, dirbase };

  if (m === 'dev') {
    dev(env, args, options);
  }

  if (m === 'prod') {
    prod(env, args, options);
  }

  if (m === 'stats') {
    prod(env, args, options, {
      plugins: [new BundleAnalyzerPlugin()],
    });
  }
};
