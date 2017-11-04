import { expect, should } from 'chai';

describe('Basic javascript tests', function() {
    it('equality with type coercion', function() {
        expect(3).equal('__');
    });
    it('string.length', function() {
        var fruit = 'apple';
        expect(__).equal(fruit.length);
    });

    it('slice', function() {
        var fruit = 'apple pie';
        expect(__).equal(fruit.slice(0, 5));
    });
    it('typeof', function() {
        expect(__).equal(typeof({}));
        expect(__).equal(typeof('apple'));
        expect(__).equal(typeof(-5));
        expect(__).equal(typeof(false));
    });
    describe('About Objects', function() {
        it('object literal notation', function() {
            var person = {
                __: __,
                __: __
            };
            expect('Joelle Hoquart').equal(person.name);
            expect(43).equal(person.age);
        });

        it('dynamically adding properties', function() {
            var person = {};
            person.__ = 'Joelle Hoquart';
            person.__ = 43;
            expect('Joelle Hoquart').equal(person.name);
            expect(43).equal(person.age);
        });

        it('adding properties from strings', function() {
            var person = {};
            person['__'] = 'Joelle Hoquart';
            person['__'] = 43;
            expect('Joelle Hoquart').equal(person.name);
            expect(43).equal(person.age);
        });

        it('adding functions', function() {
            var person = {
                name: 'Joelle Hoquart',
                age: 43,
                toString: function() {
                    return __; // HINT: use the 'this' keyword to refer to the person object.
                }
            };
            expect('I Joelle Hoquart am 43 years old.').equal(person.toString());
        });
    });

    it('variables declared inside of a function', function() {
        var outerVariable = 'outer';

        // this is a self-invoking function. Notice that it calls itself at the end ().
        (function() {
            var innerVariable = 'inner';
            expect(__).equal(outerVariable);
            expect(__).equal(innerVariable);
        })();

        expect(__).equal(outerVariable);
        expect(__).equal(typeof(innerVariable));
    });

});