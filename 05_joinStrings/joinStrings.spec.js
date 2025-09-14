const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Suaysh', () => {
    expect(values.firstName).toEqual('Suyash');
  });
  test('lastName is Parve', () => {
    expect(values.lastName).toEqual('Parve');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2000', () => {
    expect(values.birthYear).toEqual(2000);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Suyash Parve and I am 25 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Suaysh Parve', () => {
    expect(values.fullName).toEqual('Suyash Parve');
  });
  test('age is 25', () => {
    expect(values.age).toEqual(25);
  });
});
