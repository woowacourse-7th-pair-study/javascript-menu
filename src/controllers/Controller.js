import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateCoachesName from '../utils/validateCoachesName.js';
import validateMenuCannotEat from '../utils/validateMenuCannotEat.js';
import { MENU } from '../constants/constants.js';

class Controller {
  /** @type {Array<{ kind: string, menus: Array<string>}>} */ #menus = [];

  constructor() {
    Object.entries(MENU).forEach(([key, value]) => {
      this.#menus.push({ kind: key, menus: parser.stringToArray(value) });
    });
  }

  async start() {
    OutputView.printWelcome();
    const coachesName = await this.#getValidatedCoachesName();

    const menusCannotEatByCoach = [];
    // 못 먹는 메뉴 리스트
    // [ 
    //   { name: '토미', menus: [ '비빔밥', '탕수육' ] }, 
    //   { name: '제임스', menus: [ '우동' ] }, 
    // ]
    for (const name of coachesName) {
      const menus = await this.#getValidatedMenuCannotEat(name);
      menusCannotEatByCoach.push({ name: name, menus: menus });
    }

    
    
    // OutputView.printResult(menusCannotEatByCoach);
  }

  async #getValidatedCoachesName() {
    try {
      const coachesName = await InputView.readCoachesName();
      const parsedCoachesName = parser.stringToArray(coachesName);
      const filteredCoachesName = parser.deleteEmptyValue(parsedCoachesName);

      validateCoachesName(filteredCoachesName);

      return filteredCoachesName;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedCoachesName();
    }
  }

  async #getValidatedMenuCannotEat(name) {
    try {
      const menuCannotEat = await InputView.readMenuCannotEat(name);
      const parsedMenuCannotEat = parser.stringToArray(menuCannotEat);
      const filteredMenuCannotEat = parser.deleteEmptyValue(parsedMenuCannotEat);

      validateMenuCannotEat(filteredMenuCannotEat, this.#menus);

      return filteredMenuCannotEat;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedMenuCannotEat(name);
    }
  }
}

export default Controller;
