const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = require('../constant/output.js');

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printEnd() {
    Console.print(OUTPUT_MESSAGE.end);
  },

  printResult(coachArray, categories) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(`[ 카테고리 | ${categories.join(' | ')} ]`);
    coachArray.forEach((coach) => {
      const name = coach.getName();
      const weeklyMenu = coach.getWeeklyMenu(categories);

      Console.print(`[ ${name} | ${weeklyMenu.join(' | ')} ]`);
    });
  },
};

module.exports = OutputView;
