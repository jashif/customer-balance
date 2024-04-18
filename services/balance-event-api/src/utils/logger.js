/**
 *
 * @param message {string}
 * @param level {string}
 */
const log = (level,message,data) => console.log(message, level, data);
module.exports = { log };
