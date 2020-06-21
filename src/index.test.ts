import {testFunc} from './index';

describe('A passing test', () => {
    test('5 to be 5', () => {
        expect(testFunc(5)).toBe(5)
    })
})