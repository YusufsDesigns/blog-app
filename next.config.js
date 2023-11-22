const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: 'Yusuf',
                mongodb_password: 'ItWRWQClMH0dZJUa',
                mongodb_clustername: 'blog-app',
                mongodb_database: 'feedback-dev'
            }
        }
    }
    return {
        env: {
            mongodb_username: 'Yusuf',
            mongodb_password: 'ItWRWQClMH0dZJUa',
            mongodb_clustername: 'blog-app',
            mongodb_database: 'feedback'
        }
    }
}

