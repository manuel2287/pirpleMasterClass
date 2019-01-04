/**
 * Not found Handler
 * Used to execute by default when a resource does not exists
 * or is not defined in the api.
 */
const NOT_FOUND_MESSAGE = "Route Not Found";
const STATUS_NOT_FOUND = 404;
const notFound = function(data, callback){
    callback(STATUS_NOT_FOUND, { message :  NOT_FOUND_MESSAGE});
}

//Export module
module.exports =  notFound;