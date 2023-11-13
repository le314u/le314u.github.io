const path = require('path')

module.exports = {
  entry: './Index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  },
}
