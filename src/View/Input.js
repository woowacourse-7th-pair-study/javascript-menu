import { CONSOLE_MESSAGE } from '../constant/message.js';
import { repeatUtilComplete } from '../util/input.js';

class Input {
  static getCoachNames() {
    return repeatUtilComplete(CONSOLE_MESSAGE.coachNamesInput);
  }

  static getCantEatMenu(name) {
    return repeatUtilComplete(`${name}${CONSOLE_MESSAGE.cantEatMenuInput}`);
  }
}

export default Input;
