// Production obfuscation can break dependency internals such as React Hook Form.
// Disable it until you have a safe, dependency-aware configuration.
module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      return webpackConfig;
    }
  }
};