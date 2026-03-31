import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main.js';

test('capitalize Test', () => {
  console.log('Capitalize Test: ' + capitalize('home'));
  expect(capitalize('home')).toBe('Home');
})

test('reverseString Test', () => {
  console.log('reverseString Test: ' + reverseString('Palindrom'));
  expect(reverseString('Palindrom')).toBe('mordnilaP');
})

test('calculator add', () => {
  console.log('calculator Add: ' + calculator.add(2, 3));
  expect(calculator.add(2, 3)).toBe(5);
})

test('calculator subtract', () => {
  console.log('calculator subtract: ' + calculator.subtract(6, 2));
  expect(calculator.subtract(6, 2)).toBe(4);
})

test('calculator multiply', () => {
  console.log('calculator multiply: ' + calculator.multiply(6, 4));
  expect(calculator.multiply(6, 4)).toBe(24);
})

test('calculator divide', () => {
  console.log('calculator divide: ' + calculator.divide(10, 2));
  expect(calculator.divide(10, 2)).toBe(5);
})

test('calculator divide by zero', () => {
  console.log('calculator divide by zero: ' + calculator.divide(7, 0));
  expect(calculator.divide(7, 0)).toBe('Dividing by zero is not possible');
})

test('caesarCipher Test 1', () => {
  console.log('caesarCipher Test 1: ' + caesarCipher('xyz', 3)); 
  expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('caesarCipher Test 2', () => {
  console.log('caesarCipher Test 2: ' + caesarCipher('HeLLo', 3)); 
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('caesarCipher Test 3', () => {
  console.log('caesarCipher Test 3: ' + caesarCipher('Hello, Wolrd!', 3)); 
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

const testObject = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};

test('analyzeArray Test', () => {
  console.log('analyzeArray Test: ', analyzeArray([1,8,3,4,2,6]));
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(testObject);
});
