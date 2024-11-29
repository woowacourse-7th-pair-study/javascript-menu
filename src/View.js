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
          return;
        } catch (error) {
          this.printMessage(error.message);
          this.readUnavailableMenus();
        }
      },
    );
  },
};

module.exports = View;
