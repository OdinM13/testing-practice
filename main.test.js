import { capitalize } from './main.js';

test('capitalize Test', () => {
  console.log(capitalize('home'));
  expect(capitalize('home')).toBe('Home');
})
