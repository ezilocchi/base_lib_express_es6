var expect = require('chai').expect;
var names = require('../src/index');

describe('testing', function() {
   it('should be an array of strings', function() {
       expect(names.all).to.satisfy(isArrayOfStrings);

       function isArrayOfStrings(array){
           return array.every(function(item){
               return typeof item === 'string';
           });
       }
   })
});