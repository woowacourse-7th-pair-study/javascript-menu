const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = require('../constant/output.js');

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printEnd() {
    Console.print(OUTPUT_MESSAGE.end);
  },
};

module.exports = OutputView;
