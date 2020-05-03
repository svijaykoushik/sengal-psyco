import { assert } from "chai";
import Vector from "../../src/Math/Vector";

describe("Vector", function () {
    describe("#length", function () {
        it("should return 6.403 +0.001/-0.001", function () {
            assert.closeTo(new Vector(5, 4).length, 6.403, 0.001, "Expected 6.403 +0.001/-0.001");
        });

        it("should return 5", function () {
            assert.equal(new Vector(-3, 4).length, 5, "Expected 5 as output");
        });
    });

    describe("#add()", function () {
        it("should return the sum of the current and the new vector", function () {
            var currVect = new Vector(3, 5);
            var newVect = new Vector(22, 33);
            var resultVect = currVect.add(newVect);
            assert.equal(resultVect.x, 25, "Expected 25 but got " + resultVect.x);
            assert.equal(resultVect.y, 38, "Expected 38 but got " + resultVect.y);
        });
    });

    describe("#subtract()", function () {
        it("should return the difference of the current and the new vector", function () {
            var currVect = new Vector(5, 55);
            var newVect = new Vector(22, 33);
            var resultVect = currVect.subtract(newVect);
            assert.equal(resultVect.x, -17, "Expected -17 but got " + resultVect.x);
            assert.equal(resultVect.y, 22, "Expected 22 but got " + resultVect.y);
        });
    });

    describe("#divide()", function () {
        it("should return  a vector after dividing it's components by a scalar value", function () {
            var currVect = new Vector(5, 55);
            var resultVect = currVect.divide(5);
            assert.equal(resultVect.x, 1, "Expected 1 but got " + resultVect.x);
            assert.equal(resultVect.y, 11, "Expected 11 but got " + resultVect.y);
        });
    });

    describe("#dotProduct()", function () {
        it("should return the dot product of the current vector and the new vector", function () {
            var currVect = new Vector(8, 13);
            var newVect = new Vector(17, 67);
            var result = currVect.dotProduct(newVect);
            assert.equal(result, 1007, "Expected 1007 but got " + result);
        });
    });

    describe("#normalize()", function () {
        it("should return a normalized vector", function () {
            var currentVect = new Vector(3, 4);
            var resultVect = currentVect.normalize();
            assert.closeTo(resultVect.x, 0.6, 1, "Expected 0.6 +/- 1 but got " + resultVect.x);
            assert.closeTo(resultVect.y, 0.8, 1, "Expected 0.8 +/- 1 but got " + resultVect.x);
        });
    });

    describe("#clamp()", function () {
        it("should return a vector between the min and max range", function () {
            var currVect = new Vector(5, 6);
            var maxVect = new Vector(10, 12);
            var minVect = new Vector(2, 3);
            var clamppedVect = Vector.clamp(currVect, minVect, maxVect);
            assert.equal(clamppedVect.x, 5, "expected 5 but got " + clamppedVect.x);
            assert.equal(clamppedVect.y, 6, "expected 6 but got " + clamppedVect.y);
        });
    });
});