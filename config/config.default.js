'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1506497392834_7040';

  // add your config here
  config.multipart={
      fileExtensions: [ '.txt' ], // 增加对 .txt 扩展名的支持
  };
  config.middleware = ['auth','wechatAuth'];
  config.auth={
    match:'/admin/api'
  }
  config.wechatAuth={
      match:'/wechat/api'
  }
  // security
  config.security = {
    csrf: false // disable csrf
  };

  // cluster
  config.cluster = {
    listen: {
      port: 3000
    }
  };

  // static
  config.static = {
    prefix: '/static/',
    dir:[path.join(appInfo.baseDir,'app/public'),path.join(appInfo.baseDir,'app/upload'),path.join(appInfo.baseDir,'app/settlement_file')],
  };
  // view
  config.view = {
    defaultExtension: '.pug',
    defaultViewEngine: 'pug',
    mapping: { '.pug': 'pug' }
  };


  // sequelize
  config.sequelize = {
    host: '1',
    port:'1',
    database: '1',
    username: '1',
    password: '1',
    dialect: 'mysql',
    define: {
      underscored: true,
      timestamps: true
    }
  };

  return config;
};