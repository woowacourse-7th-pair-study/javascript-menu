import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/constants.js';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async readCoachesName() {
    return await readPipe(INPUT_MESSAGES.COACH_NAME);
  },

  async readMenuCannotEat(name) {
    return await readPipe(INPUT_MESSAGES.MENU(name));
  },
}

export default InputView;
