module.exports = {
    es: {
        hosts: (process.env.ES_HOSTS || 'http://localhost:9200').split(',')
    },
    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 1729
    }
};