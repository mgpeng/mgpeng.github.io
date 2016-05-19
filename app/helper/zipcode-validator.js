"use strict";
var numberRegexp = /^[0-9]+$/;
var ZipcodeValidator = (function () {
    function ZipcodeValidator() {
    }
    ZipcodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 6 && numberRegexp.test(s);
    };
    return ZipcodeValidator;
}());
exports.ZipcodeValidator = ZipcodeValidator;
//# sourceMappingURL=zipcode-validator.js.map