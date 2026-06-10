const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        webpackConfig.plugins.push(
          new WebpackObfuscator(
            {
              rotateStringArray: true,
              stringArray: true,
              stringArrayEncoding: ['base64'],
              stringArrayThreshold: 1,
              deadCodeInjection: true,
              deadCodeInjectionThreshold: 0.7,
              compact: true,
              controlFlowFlattening: true,
              controlFlowFlatteningThreshold: 0.75,
              disableConsoleOutput: true,
              identifierNamesGenerator: 'hexadecimal',
              transformObjectKeys: true,
              unicodeEscapeSequence: false
            },
            []
          )
        );
      }

      return webpackConfig;
    }
  }
};