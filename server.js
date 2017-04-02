// Gets called when running npm start

var webpack = require('webpack');

var Pjconfig = require('./package.json');
var pathForConfig = Pjconfig.config.configFilePath;
var fs = require("file-system");
var srcFilePath = pathForConfig;
var destFilePath = "config.js";
var content = fs.readFileSync(srcFilePath, 'utf8');
var isSuccess = fs.writeFileSync(destFilePath, content, 'utf8');

var appConfig= require('./' + destFilePath);
//console.log("appConfig is ->>>",appConfig);
var appPort = appConfig.APP_PORT;


var WebpackDevServer = require('webpack-dev-server');

console.log("ENVIRONMENT_TYPE",process.env.NODE_ENV);
var currentEnvironment;
if(process.env['NODE_ENV']==undefined){
  currentEnvironment = 'production';
}else{
  currentEnvironment = process.env['NODE_ENV'].trim();  
}


var config= (currentEnvironment=='development') ? require('./webpack.dev.config') : require('./webpack.prod.config');//default config

// if(process.env.NODE_ENV=='development'){
//   config = require('./webpack.dev.config');
// }
// if(process.env.NODE_ENV=='production'){
//   config = require('./webpack.prod.config');
// }


//var appPort = config.appPort;
var server = new WebpackDevServer(webpack(config), { // Start a server
  publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  inline: false,
  historyApiFallback: true,
  quiet: true,// Without logging
  headers: { "Access-Control-Allow-Origin": "*" }
}).listen(appPort, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening on port  :' + appPort);
});
module.exports=appPort;