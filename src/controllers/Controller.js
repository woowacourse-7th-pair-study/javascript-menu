import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateCoachesName from '../utils/validateCoachesName.js';
import validateMenuCannotEat from '../utils/validateMenuCannotEat.js';
import { MENU, MENU_CATEGORY_NUM } from '../constants/constants.js';
import Recommand from '../domains/Recommand.js';
import getCategoryCount from '../utils/getCategoryCount.js';
import { Random } from '@woowacourse/mission-utils';

class Controller {
  /** @type {Array<{ category: string, menus: Array<string>}>} */ #menus = [];
  /** @type {Array<string>} 월 ~ 금 카테고리 */ #categorys = [];
  /** @type {Array<{ name: string, menus: Array<string> }>} 추천된 메뉴들 */ #recommand = [];

  constructor() {
    Object.entries(MENU).forEach(([key, value]) => {
      this.#menus.push({ category: key, menus: parser.stringToArray(value) });
    });
  }

  async start() {
    OutputView.printWelcome();
    const coachesName = await this.#getValidatedCoachesName();

    // 못 먹는 메뉴 리스트
    // [ 
    //   { name: '토미', menus: [ '비빔밥', '탕수육' ] }, 
    //   { name: '제임스', menus: [ '우동' ] }, 
    // ]
    const menusCannotEatByCoach = [];
    for (const name of coachesName) {
      const menus = await this.#getValidatedMenuCannotEat(name);
      menusCannotEatByCoach.push({ name: name, menus: menus });
    }

    // 월, 화, 수, 목, 금 카테고리 추천
    for (let count = 0; count < 5; count++) {
      const randomCategory = this.#getRandomCategory();
      this.#categorys.push(randomCategory);
    }

    menusCannotEatByCoach.forEach(({ name, menus }) => {
      const recommand = new Recommand();
      const recommandedMenus = recommand.getRecommandedMenus(menus, this.#categorys, this.#menus);

      // 각 코치 별 추천된 메뉴들 저장
      this.#recommand.push({ name: name, menus: recommandedMenus });
    });

    OutputView.printResult(this.#categorys, this.#recommand);
  }

  #getRandomCategory() {
    let randomNum;
    do {
      randomNum = Random.pickNumberInRange(1, 5);
    } while (getCategoryCount(this.#categorys, randomNum) > 2);

    return MENU_CATEGORY_NUM[randomNum];
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
