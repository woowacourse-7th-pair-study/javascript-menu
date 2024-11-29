import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';

class Output {
  static printStartMessage() {
    Console.print(CONSOLE_MESSAGE.startMessage);
  }

  static printResultStartMessage() {
    Console.print(CONSOLE_MESSAGE.resultStartMessage);
  }
}

export default Output;
