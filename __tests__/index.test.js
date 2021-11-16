import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('my_tests', () => {
  expect(reverse('a')).toEqual('a');
  expect(reverse('Hellre')).toEqual('erlleH');
})