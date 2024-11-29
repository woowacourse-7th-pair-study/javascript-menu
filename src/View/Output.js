import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';
import { DAYS } from '../constant/days.js';

class Output {
  static printStartMessage() {
    Console.print(CONSOLE_MESSAGE.startMessage);
  }

  static printResultStartMessage() {
    Console.print(CONSOLE_MESSAGE.resultStartMessage);
  }

  static printResultHeader(category) {
    Console.print(`[ 구분 | ${DAYS.join(' | ')} ]`);
    Console.print(`[ 카테고리 | ${category.join(' | ')} ]`);
  }

  static printRecommendMenuPerCoach(coachName, result) {
    Console.print(`[ ${coachName} | ${result.join(' | ')} ]`);
  }

  static printEndMessage() {
    Console.print(CONSOLE_MESSAGE.programEndMessage);
  }
}

export default Output;
