const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'timeuss',
        mongodb_password: 'timeuss',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-site-dev'
      }
    }
  }

  return {
    env: {
      mongodb_username: 'timeuss',
      mongodb_password: 'timeuss',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog-site-prod'
    }
  }
}

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: process.env.DEV_DB_USER,
//         mongodb_password: process.env.DEV_DB_PASS,
//         mongodb_clustername: process.env.DEV_DB_CLUSTER,
//         mongodb_database: process.env.DEV_DB_NAME
//       }
//     }
//   }

//   return {
//     env: {
//       mongodb_username: process.env.PROD_DB_USER,
//       mongodb_password: process.env.PROD_DB_PASS,
//       mongodb_clustername: process.env.PROD_DB_CLUSTER,
//       mongodb_database: process.env.PROD_DB_NAME
//     }
//   }
// }
