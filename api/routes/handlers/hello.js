/**
 * Hello Handler.
 * Used to handle /hello or /hello?name=Name enpoints.
 * when user set Name query string it will say Hi 'Name'
 * if not it will return an explanation
 */
const DEFAULT_INSTRUCTION_MESSAGE = "How are you?, I don't know your name, can you tell me, by using '/hello?name=Name', please?";
const STATUS_OK = 200;

const hello = function(data, callback) {
    const { queryStringObject, payload } = data;
    const message = queryStringObject.name || payload.name || DEFAULT_INSTRUCTION_MESSAGE;
    callback(STATUS_OK, { message: `Hi, ${ message }` });
}

//Export module
module.exports = hello;