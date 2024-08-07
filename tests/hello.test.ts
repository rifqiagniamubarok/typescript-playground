import { sayHello } from '../src/say_hello';

describe('sayHello', function () {
  test('should return hello rifqi', function () {
    expect(sayHello('rifqi')).toBe('hello rifqi');
  });
});
