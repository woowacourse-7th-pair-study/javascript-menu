const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./constants/errorMessage');

class View {
  static printStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  }

  static printMessage(message) {
    Console.print(message);
  }

  static async readCoachName() {
    const input = await Console.readLineAsync(
      '코치의 이름을 입력해 주세요. (, 로 구분)',
    );
    if (input.trim() === '') throw new Error(ERROR_MESSAGE.noBlank);
  }
}

module.exports = View;
