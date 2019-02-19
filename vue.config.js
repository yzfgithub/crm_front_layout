module.exports = {
    baseUrl: process.env.assetsPublicPath,
    outputDir: process.env.outputDir,
    productionSourceMap: false,
    // assetsDir: "static",
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
