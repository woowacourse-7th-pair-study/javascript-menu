import { Console, Random } from '@woowacourse/mission-utils';
import { SAMPLE } from '../App.js';

class MenuRecommendMachine {
  #category;
  #allMenu = {};
  #eatenMenuList = {};

  constructor(coachNames) {
    this.#category = Object.keys(SAMPLE);
    Object.entries(SAMPLE).forEach(([category, menus]) => {
      this.#allMenu[category] = menus.split(', ');
    });
    coachNames.forEach((name) => {
      this.#eatenMenuList[name] = Object.fromEntries(
        this.#category.map((value) => [value, []]),
      );
    });
  }

  chooseRecommendMenu(name) {
    const randomCategory = this.#chooseRandomCategory();

    const menu = this.#chooseRandomMenuInCategory(randomCategory);

    Console.print(menu);
  }

  #chooseRandomCategory() {
    const randomIndex = Random.pickNumberInRange(1, 5);

    return this.#category[randomIndex - 1];
  }

  #chooseRandomMenuInCategory(category) {
    const randomMenuIndex = Random.shuffle(
      this.#allMenu[category].map((_, index) => index),
    )[0];
    return this.#allMenu[category][randomMenuIndex];
  }
}

export default MenuRecommendMachine;
