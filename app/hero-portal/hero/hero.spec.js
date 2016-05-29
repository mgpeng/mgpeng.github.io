"use strict";
var mock_heroes_1 = require('../data/mock-heroes');
describe('HEROES', function () {
    console.log(mock_heroes_1.HEROES);
    it('Check id', function () {
        var id = 12;
        expect(mock_heroes_1.HEROES[1].id).toEqual(12);
    });
    it('check name', function () {
        var name = 'Super Cat';
        expect(mock_heroes_1.HEROES[0].name).toEqual('Mr. Nice');
    });
});
//# sourceMappingURL=hero.spec.js.map