var _ = require('lodash');

module.exports = function areBothArgsArray(arg1, arg2){
    if(arg1 == undefined){
        return _.isArray(arg2);
    }
    return _.isArray(arg1) && _.isArray(arg2);
};