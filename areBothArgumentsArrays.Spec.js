var proxyquire = require('proxyquire');
var lodashMock = {};
lodashMock.isArray = function(){};
var isBothArray = proxyquire('./areBothArgumentsArrays', {'lodash': lodashMock});

describe('areBothArgsArray', function(){
    it("should call isArray twice", function(){
        spyOn(lodashMock, 'isArray').and.returnValue(true);
        expect(isBothArray([], [])).toBeTruthy();
        expect(lodashMock.isArray.calls.count()).toBe(2);
    });

    it("should allow the first argument to be null", function(){
        spyOn(lodashMock, 'isArray').and.returnValue(true);
        expect(isBothArray(undefined, [])).toBeTruthy();
        expect(lodashMock.isArray.calls.count()).toBe(1);
    });
});