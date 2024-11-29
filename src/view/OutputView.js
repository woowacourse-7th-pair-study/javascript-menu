const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = require('../constant/output.js');

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },
};

module.exports = OutputView;
