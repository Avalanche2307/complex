var assert = require('assert');
var Complex = require('../complex');

var real = Math.random() * 200 - 100;
var img = Math.random() * 200 - 100;

var testCases = [
  {
    name: '#real()',
    detail: 'should return the real part of the complex number',
    value: new Complex(real, img).real,
    result: real
  },
  {
    name: '#imaginary()',
    detail: 'should return the complex part of the complex number',
    value: new Complex(real, img).imaginary,
    result: img
  },
  {
    name: '#absoluteValue()',
    detail: 'should return the absolute value of the complex number',
    value: new Complex(real, img).absoluteValue,
    result: Math.sqrt(real ** 2 + img ** 2)
  },
  {
    name: '#modulus()',
    detail: 'should return the modulus of the complex number',
    value: new Complex(real, img).modulus,
    result: Math.sqrt(real ** 2 + img ** 2)
  },
  // {
  //   detail: 'should return the sum of two complex numbers',
  //   value: new Complex(real, img).add(new Complex(img, real)),
  //   result: (real + img) + ' + ' + (real + img) + 'i'
  // }
];

describe('Complex', function () {
  function implementTest(test) {
    describe(test.name, function () {
      it(`${test.detail} `, function () {
        assert.equal(test.value, test.result);
      });
    });
  }

  for (let i = 0; i < testCases.length; i++) {
    implementTest(testCases[i]);
  }
});