"use strict";
var zipcode_validator_1 = require("./zipcode-validator");
var lettersonly_validator_1 = require("./lettersonly-validator");
var mobile_validator_1 = require("./mobile-validator");
var TestValidator = (function () {
    function TestValidator() {
    }
    TestValidator.prototype.checkArray = function (strings) {
        var validators = {};
        validators["Zip code"] = new zipcode_validator_1.ZipcodeValidator();
        validators["Letters only"] = new lettersonly_validator_1.LettersonlyValidator();
        validators["Mobile"] = new mobile_validator_1.MobileValidator();
        strings.forEach(function (str) {
            for (var name in validators) {
                console.log(str + " " + (validators[name].isAcceptable(str) ? "match" : "no match") + " " + name);
                console.log("ck");
            }
        });
    };
    return TestValidator;
}());
exports.TestValidator = TestValidator;
//# sourceMappingURL=test-validator.js.map