// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"), // Polyfill Buffer
      "process": require.resolve("process/browser"), // Polyfill process
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "https": false, // Optional if not used
      "zlib": require.resolve("browserify-zlib"),
    },
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    fallback: {
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer")
    }
}
};
