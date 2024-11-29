const { Console } = require('@woowacourse/mission-utils');

class View {
  static printStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  }

  static readCoachName() {
    return Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)');
  }
}

module.exports = View;
