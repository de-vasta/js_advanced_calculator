'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(arg) {
      this.result += arg;

      return this;
    },
    subtract(arg) {
      this.result -= arg;

      return this;
    },
    multiply(arg) {
      this.result *= arg;

      return this;
    },
    divide(arg) {
      this.result /= arg;

      return this;
    },
    reset(arg) {
      this.result = 0;

      return this;
    },
    operate(operation, arg) {
      operation.call(this, arg);

      return this;
    },
  };
}

module.exports = makeCalculator;
