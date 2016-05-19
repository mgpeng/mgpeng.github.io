"use strict";
var numberRegexp = /^[0-9]+$/;
var MobileValidator = (function () {
    function MobileValidator() {
    }
    MobileValidator.prototype.isAcceptable = function (num) {
        return num.toString().length === 9 && numberRegexp.test(num.toString());
    };
    return MobileValidator;
}());
exports.MobileValidator = MobileValidator;
//# sourceMappingURL=mobile-validator.js.map