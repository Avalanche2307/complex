class Complex {
  constructor(re, im, notation) {
    // complex number details
    this._real = !isNaN(re) && re || 0;
    this._img = !isNaN(im) && im || 0;
    this._sign = !isNaN(im) && im < 0 ? '-' : '+';
    this._notation = notation && ['i', 'j'].includes(notation) && notation || 'i';
    this._abs = Math.sqrt(this._real ** 2 + this._img ** 2);

    // complex number types
    this._isReal = im === 0 || isNaN(im);
    this._isImaginary = !this._isReal;
    this._isPurelyImaginary = this._isImaginary && (re === 0 || isNaN(re));

    // complex number display values
    this._displayValue = this._real + ' ' + this._sign + ' ' + Math.abs(this._img) + this._notation;
    this._coordinateValue = '(' + this._real + ', ' + this._img + ')';

    // coordinate values
    this._rect = [this._real, this._img];
    // **this._polar = '';
  }

  get real() {
    return this._real;
  }

  get imaginary() {
    return this._img;
  }

  get notation() {
    return this._notation;
  }

  get absoluteValue() {
    return this._abs;
  }

  get modulus() {
    return this._abs;
  }

  get displayValue() {
    if (this._isPurelyImaginary) return Math.abs(this._img) + 'i';
    if (this._isReal) return this._real + '';
    return this._displayValue;
  }

  get coordinateValue() {
    return this._coordinateValue;
  }

  get coordinates() {
    return {
      rectangular: this._rect
    };
  }

  get rectCoords() {
    return this._rect;
  }

  get isReal() {
    return this._isReal;
  }

  get isImaginary() {
    return this._isImaginary;
  }

  get isPurelyImaginary() {
    return this._isPurelyImaginary;
  }

  add(addend) {
    if (addend instanceof Complex)
      return new Complex(this._real + addend._real, this._img + addend._img).displayValue;
  }

  subtract(subtrahend) {
    if (subtrahend instanceof Complex)
      return new Complex(this._real - subtrahend._real, this._img - subtrahend._img).displayValue;
  }
}

module.exports = Complex;

// console.log('', );
// let complexNumber = new Complex(1, -2, 'k');
// console.log('Class: ', complexNumber);
// console.log('Display Value: ', complexNumber.displayValue);
// console.log('Coordinate Value: ', complexNumber.coordinateValue);
// console.log('Coordinates: ', complexNumber.coordinates);
// console.log('Rectangular Coordinates: ', complexNumber.rectCoords);
// console.log('Is Real: ', complexNumber.isReal);
// console.log('Is Imaginary: ', complexNumber.isImaginary);
// console.log('Is Purely Imaginary: ', complexNumber.isPurelyImaginary);
// console.log('Sum: ', complexNumber.add(new Complex(3, 5)));
// console.log('Difference: ', complexNumber.subtract(new Complex(3, 5)));