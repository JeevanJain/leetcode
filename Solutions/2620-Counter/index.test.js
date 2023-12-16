const Counter = require('./index');

describe('2620. Counter', () => {
    test('counter from 5', () => {
        const counter1 = Counter(5);
        expect(counter1()).toEqual(5);
        expect(counter1()).toEqual(6);
        expect(counter1()).toEqual(7);
    });
    test('multiple counters', () => {
        const counter2 = Counter(10);
        const counter3 = Counter(20);
        expect(counter2()).toEqual(10);
        expect(counter3()).toEqual(20);
        expect(counter2()).toEqual(11);
        expect(counter3()).toEqual(21);
    });
    test('negative initial value', () => {
        const counter4 = Counter(-5);
        expect(counter4()).toEqual(-5);
        expect(counter4()).toEqual(-4);
        expect(counter4()).toEqual(-3);
        expect(counter4()).toEqual(-2);
        expect(counter4()).toEqual(-1);
        expect(counter4()).toEqual(0);
        expect(counter4()).toEqual(1);
    });
});