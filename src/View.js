const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./constants/errorMessage');
const SuggestManager = require('./SuggestManager');

const suggestManager = new SuggestManager();

const View = {
  printStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printMessage(message) {
    Console.print(message);
  },

  readCoachName() {
    Console.readLine(
      '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
      (input) => {
        try {
          if (input.trim() === '') throw new Error(ERROR_MESSAGE.noBlank);

          suggestManager.setCoaches(input);

          this.readUnavailableMenus(0);
        } catch (error) {
          this.printMessage(error.message);
          this.readCoachName();
        }
      },
    );
  },

  readUnavailableMenus(i) {
    const coachNames = suggestManager.getCoachNames();

    Console.readLine(
      `\n${coachNames[i]} (이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      (menu) => {
        try {
          suggestManager.setCoachUnavailableMenus(coachNames[i], menu);
          if (coachNames[++i]) this.readUnavailableMenus(i);
          else this.printResult();
        } catch (error) {
          this.printMessage(error.message);
          this.readUnavailableMenus();
        }
      },
    );
  },

  printResult() {
    const { categoryResult, coachesResult } = suggestManager.pickMenus();
    Console.print('메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(
      `[ 카테고리 | ${categoryResult[0]} | ${categoryResult[1]} | ${categoryResult[2]} | ${categoryResult[3]} | ${categoryResult[4]} ]`,
    );
    coachesResult.forEach((coach) => {
      Console.print(
        `[ ${coach.name} | ${coach.menus[0]} | ${coach.menus[1]} | ${coach.menus[2]} | ${coach.menus[3]} | ${coach.menus[4]} ]`,
      );
    });
    Console.print('\n추천을 완료했습니다.');
  },
};

module.exports = View;
