/**
 * Represents a 2D vector.
 */
class Vector{
    /**
     * @constructs a 2D vector
     * @param {number} x The first component of the 2D vector.
     * @param {number} y The second component of the 2D vector.
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
      }
    
      /**
       * The first component of the vector.
       * @public
       * @readonly
       */
      get x() {
        return this._x;
      }
    
      /**
       * The second component of the vector.
       * @public
       * @readonly
       */
      get y() {
        return this._y;
      }
    
      /**
       * Gets the magnitude of the vector
       * @public
       * @readonly
       */
      get length() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
      }
    
      /**
       * Add the provided vector with the current vector.
       * @param {Vector} vector The vector to be added with.
       * @returns {Vector} The sum of the current and the provided vector.
       * @public
       */
      add(vector) {
        return new Vector(this._x + vector.x, this._y + vector.y);
      }
    
      /**
       * Subtract the provided vector with the current vector.
       * @param {Vector} vector The vector to be subtracted with.
       * @returns {Vector} The difference of the current and the provided vector.
       * @public
       */
      subtract(vector) {
        return new Vector(this._x - vector.x, this._y - vector.y);
      }
    
      /**
       * Divide the provided scalar quantity with the current vector.
       * @param {number} scalar The scalar value with which the vector should be divided.
       * @returns {Vector} The resultant vector after division.
       * @public
       */
      divide(scalar) {
        return new Vector(this._x / scalar, this._y / scalar);
      }
    
      /**
       * Calculates the dot product of the current vector and provided vector.
       * @param {Vector} vector The vector with which the dot product has to be calculated.
       * @returns {number} dot product of 2 vectors
       * @public
       */
      dotProduct(vector) {
        return this._x * vector.x + this._y * vector.y;
      }
    
      /**
       * Normalize the current vector.
       * @returns {Vector} normalized form of the current vector.
       * @public
       */
      normalize() {
        var mag = this.length,
          normalizedVector = null;
        if (mag > 0) {
          normalizedVector = this.divide(mag);
        }
        return normalizedVector;
      }
    
      /**
       * Clamps a vector between the minimum and maximum specified range.
       * @param {Vector} val The value to be clamped.
       * @param {Vector} min The minimum value of the range.
       * @param {Vector} max The maximum value of the range.
       * @returns{Vector} a vector clamped between the minimum and maximum specified range.
       * @public
       * @static
       */
      static clamp(val, min, max) {
        var _x, _y;
        _x = Math.max(min.x, Math.min(val.x, max.x));
        _y = Math.max(min.y, Math.min(val.y, max.y));
        return new Vector(_x, _y);
      }
}

export default Vector;