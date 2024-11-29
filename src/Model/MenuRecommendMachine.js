import { Console, Random } from '@woowacourse/mission-utils';
import { SAMPLE } from '../App.js';

class MenuRecommendMachine {
  #category;
  #allMenu = {};
  #eatenCategory = {};
  #eatenMenuList = {};

  constructor(coachNames) {
    this.#category = Object.keys(SAMPLE);
    Object.entries(SAMPLE).forEach(([category, menus]) => {
      this.#allMenu[category] = menus.split(', ');
    });
    Object.keys(SAMPLE).forEach((category) => {
      this.#eatenCategory[category] = 0;
    });
    coachNames.forEach((name) => {
      this.#eatenMenuList[name] = [];
    });
  }

  chooseRecommendMenu(names, cantEatMenu) {
    let randomCategory = this.#chooseRandomCategory();

    while (this.#eatenCategory[randomCategory] === 2) {
      randomCategory = this.#chooseRandomCategory();
    }

    this.#eatenCategory[randomCategory] += 1;

    const menus = names.map((name) => {
      let menu = this.#chooseRandomMenuInCategory(randomCategory);

      while (
        this.#eatenMenuList[name].includes(menu) ||
        cantEatMenu[name].includes(menu)
      ) {
        menu = this.#chooseRandomMenuInCategory(randomCategory);
      }

      this.#eatenMenuList[name] = [...this.#eatenMenuList[name], menu];

      return [name, menu];
    });

    return { category: randomCategory, menus };
  }

  #chooseRandomCategory() {
    const randomIndex = Random.pickNumberInRange(1, 5);

    return this.#category[randomIndex - 1];
  }

  #chooseRandomMenuInCategory(category) {
    const randomMenuIndex = Random.shuffle(
      this.#allMenu[category].map((_, index) => index + 1),
    )[0];
    return this.#allMenu[category][randomMenuIndex - 1];
  }
}

export default MenuRecommendMachine;
