/**
 * Router Component
 * Used to export all handlers this api will expose.
 */
const hello = require('./handlers/hello');
const notFound = require('./handlers/notFound')
const router = {
    hello,
    notFound
};

//Export module
module.exports = router;