"use strict";
var lettersRegexp = /^[A-Za-z]+$/;
var LettersonlyValidator = (function () {
    function LettersonlyValidator() {
    }
    LettersonlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersonlyValidator;
}());
exports.LettersonlyValidator = LettersonlyValidator;
//# sourceMappingURL=lettersonly-validator.js.map