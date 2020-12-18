module.exports = {
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 6789,
        proxy: {
            '/getIP': {
                target: 'http://pv.sohu.com/cityjson',
                changeOrigin: true,
                pathRewrite: {
                    '^/getIP': ''
                }
            },
            '/font': {
                target: 'https://127.0.0.1:2345',
                changeOrigin: true,
                pathRewrite: {
                    '^/font': ''
                }
            },
        }
    }
}