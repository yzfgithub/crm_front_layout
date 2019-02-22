module.exports = {
    baseUrl: process.env.assetsPublicPath,
    outputDir: process.env.outputDir,
    productionSourceMap: false,
    // assetsDir: "static",
    devServer: {
        open: true,
        port: 8080,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8888',
        //         ws: true,
        //         changeOrigin: true,
        //     },
        // },
    },
    configureWebpack: {
        externals: {
            vue: "Vue",
            "vue-router": "VueRouter",
            "element-ui": "ELEMENT",
            'axios' : 'axios',
            echarts: 'echarts'
        }
    },
};
