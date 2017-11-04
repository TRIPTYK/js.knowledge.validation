import { expect, should } from 'chai';

describe('Basic javascript tests', function() {
    it('equality with type coercion', function() {
        expect(3).equal(3);
    });
    it('string.length', function() {
        var fruit = 'apple';
        expect(5).equal(fruit.length);
    });

    it('slice', function() {
        var fruit = 'apple pie';
        expect('apple').equal(fruit.slice(0, 5));
    });
    it('typeof', function() {
        expect('object').equal(typeof({}));
        expect('string').equal(typeof('apple'));
        expect('number').equal(typeof(-5));
        expect('boolean').equal(typeof(false));
    });
    describe('About Objects', function() {
        it('object literal notation', function() {
            var person = {
                name: 'Gilles Bertrand',
                age: 43
            };
            expect('Gilles Bertrand').equal(person.name);
            expect(43).equal(person.age);
        });

        it('dynamically adding properties', function() {
            var person = {};
            person.name = 'Gilles Bertrand';
            person.age = 43;
            expect('Gilles Bertrand').equal(person.name);
            expect(43).equal(person.age);
        });

        it('adding properties from strings', function() {
            var person = {};
            person['name'] = 'Gilles Bertrand';
            person['age'] = 43;
            expect('Gilles Bertrand').equal(person.name);
            expect(43).equal(person.age);
        });

        it('adding functions', function() {
            var person = {
                name: 'Gilles Bertrand',
                age: 43,
                toString: function() {
                    return `I ${this.name} am ${this.age} years old.`; // HINT: use the 'this' keyword to refer to the person object.
                }
            };
            expect('I Gilles Bertrand am 43 years old.').equal(person.toString());
        });
    });

    it('variables declared inside of a function', function() {
        var outerVariable = 'outer';

        // this is a self-invoking function. Notice that it calls itself at the end ().
        (function() {
            var innerVariable = 'inner';
            expect('outer').equal(outerVariable);
            expect('inner').equal(innerVariable);
        })();

        expect('outer').equal(outerVariable);
        expect('undefined').equal(typeof(innerVariable));
    });

});