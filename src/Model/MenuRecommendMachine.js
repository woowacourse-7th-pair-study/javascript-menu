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

  chooseRecommendMenu(names, cantEatMenus) {
    const randomCategory = this.#chooseRandomCategory();
    this.#eatenCategory[randomCategory] += 1;
    const menus = names.map((name) => {
      const menu = this.#chooseRandomMenuInCategory(
        randomCategory,
        name,
        cantEatMenus[name],
      );
      this.#eatenMenuList[name] = [...this.#eatenMenuList[name], menu];
      return [name, menu];
    });

    return { category: randomCategory, menus };
  }

  #chooseRandomCategory() {
    let randomCategoryIndex = this.#chooseRandomCategoryIndex();

    while (this.#eatenCategory[this.#category[randomCategoryIndex]] === 2) {
      randomCategoryIndex = this.#chooseRandomCategoryIndex();
    }

    return this.#category[randomCategoryIndex];
  }

  #chooseRandomCategoryIndex() {
    const randomIndex = Random.pickNumberInRange(1, 5);

    return randomIndex - 1;
  }

  #chooseRandomMenuInCategory(category, name, cantEatMenu) {
    const categoryMenu = this.#allMenu[category];
    let menuIndex = this.#chooseRandomMenuIndex(categoryMenu);

    while (
      this.#eatenMenuList[name].includes(categoryMenu[menuIndex]) ||
      cantEatMenu.includes(categoryMenu[menuIndex])
    ) {
      menuIndex = this.#chooseRandomMenuInCategory(categoryMenu);
    }

    return categoryMenu[menuIndex];
  }

  #chooseRandomMenuIndex(categoryMenu) {
    const randomMenuIndex = Random.shuffle(
      categoryMenu.map((_, index) => index + 1),
    )[0];
    return randomMenuIndex - 1;
  }
}

export default MenuRecommendMachine;
