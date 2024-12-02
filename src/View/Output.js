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
    Console.print(this.#printResultForm('구분', DAYS));
    Console.print(this.#printResultForm('카테고리', category));
  }

  static printRecommendMenuPerCoach(coachName, result) {
    Console.print(this.#printResultForm(coachName, result));
  }

  static printEndMessage() {
    Console.print(CONSOLE_MESSAGE.programEndMessage);
  }

  static #printResultForm(name, results) {
    return `[ ${name} | ${results.join(' | ')} ]`;
  }
}

export default Output;
