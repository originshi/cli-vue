module.exports = {
    chainWebpack: config => {
    config.module
        .rule("i18n")
        .resourceQuery(/blockType=i18n/)
        .use("i18n")
          .loader("@kazupon/vue-i18n-loader")
          .end();
    // config.module
    //       .rule("less")
    //       .resourceQuery(/lang=less/)
    //       .use("less")
    //         .loader("less-loader")
    //         .end();
    // config.module
    //       .rule("style")
    //       .resourceQuery(/.vue/)
    //       .use("style-loader")
    //         .loader("style-loader")
    //         .end();

           
            
      },
    //   configureWebpack: config => {
          
    //     require('vux-loader').merge(config, {
            
    //         plugins: ['vux-ui'],
            
    //       })
    //   }

  }