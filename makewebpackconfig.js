var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AppCachePlugin = require('appcache-webpack-plugin');

var appConfig= require('./config.js');
console.log("appConfig is ->>>",appConfig);
var appPort = appConfig.APP_PORT;//Port on which the application is running

process.noDeprecation = true;
module.exports = function(options) {
  var entry, jsLoaders, plugins, cssLoaders, devtool;
  console.log('options webconfig-->', options, 'directory name', __dirname);

  // If production is true
  if (options.prod) {
    console.log('production minifcation');
    // Entry
    entry = {
       app: './js/app.js'
    };

   
    // Plugins
    plugins = [// Plugins for Webpack
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
   }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})

    
      // new es3MemberExpressionLiterals(),
      //
      
    ];

  // If app is in development
  } else {
    devtool = 'source-map';
    // Entry
    entry = [
      "webpack-dev-server/client?http://0.0.0.0:" + appPort, // Needed for hot reloading
      "webpack/hot/only-dev-server", // See above
      path.resolve(__dirname,'./js/app') // Start with js/app.js...
    ];
    
    // Only plugin is the hot module replacement plugin
    plugins = [
     new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
      }
     }),
     new webpack.HotModuleReplacementPlugin()// Make hot loading work,
    ]
  }

  return {
    devtool: devtool,
    entry: entry,
    output: { // Compile into js/build.js
      path: path.resolve(__dirname, 'build'),
      filename: "js/bundle.js"
    },
    module: {
      rules: [
      {
          test: /\.js$/, // Transform all .js files required somewhere within an entry point...
          loader: 'babel-loader', // ...with the specified loaders...
          exclude: /node_modules/,
          query : {
            presets : ['es2015','react','stage-2']
          }

        }
        , {
          test:   /\.css$/, // Transform all .css files required somewhere within an entry point...
          use : [
            {
              loader : 'style-loader'
            },
            {
              loader : 'css-loader'
            },
            {
              loader : 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ] // ...with PostCSS
        }, {
          test: /\.jpe?g$|\.gif$|\.png$/i,
          loader: "url-loader?limit=100000"
        },
        { test: /\.(woff|woff2|eot|ttf|svg)$/,
         loader: 'url-loader?limit=100000' }
      ]
    },
    plugins: plugins,
    target: "web", // Make web variables accessible to webpack, e.g. window
    stats: false, // Don't show stats in the console
    node: {
      fs: "empty"
    }
  }
}