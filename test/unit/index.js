var expect = require('chai').expect;
var names = ['pedro', 'juan', 'martin'];

describe('testing', function() {
  it('should be an array of strings', function() {

    expect(names).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(array){
      return array.every(function(item){
        return typeof item === 'string';
      });
    }
  })
});
