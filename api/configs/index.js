
//Container for all of the environments
let environments = {};

// Staging object environemt as default
environments.staging = {
    httpPort: 3000,
    httpsPort: 3001,
    envName: 'staging'
}

// Production environment
environments.production = {
    httpPort: 5000,
    httpsPort: 5001,
    envName: 'production'
}

//Determine which environment was passe as comman line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLocaleLowerCase() : '';

// Check that the current environemtn is one of the environments set. if not default staging
const environemtToExport = environments[currentEnvironment] || environments.staging

//Export module
module.exports = environemtToExport