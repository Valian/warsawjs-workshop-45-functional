import {bind} from './index';

function getAttr(name: string) { return this[name]}
function getThis() { return this }


describe('Test bind', () => {
    test('To remember this', () => {
        const obj1 = {}
        const obj2 = {a: 3}

        const getThis1 = bind(obj1, getThis)
        const getThis2 = bind(obj2, getThis)

        expect(getThis1()).toBe(obj1)
        expect(getThis2()).toBe(obj2)
    })
    test('To pass arguments correctly', () => {
        const obj = {a: 3, b: 5}

        const attrGetter = bind(obj, getAttr)

        expect(attrGetter('a')).toBe(3)
        expect(attrGetter('b')).toBe(5)
    })
})