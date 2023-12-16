require('./index');

describe('Array.prototype.last', () => {
    test('empty array -1 result', () => {
        expect([].last()).toBe(-1);
    })
    test('last element of the arr', () => {
        expect(['a', 'b', 'c'].last()).toBe('c');
    })
    test('throw exception', () => {
        expect(() => 'string'.last()).toThrowError(TypeError);
    })
});