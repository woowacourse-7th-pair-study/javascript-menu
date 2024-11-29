const Coach = require('./Coach');
const { COACH_COUNT_RANGE } = require('./constants/rule');
const Menu = require('./Menu');
const { splitString } = require('./utils/commonUtil');
const { isLengthOverMin, isLengthUnderMax } = require('./utils/validationUtil');

class SuggestManager {
  #coaches;
  #menu;

  constructor() {}

  setCoaches(inputCoachNames) {
    const splittedCoachNames = splitString(inputCoachNames, ',');
    this.#validateCoachNames(splittedCoachNames);
    this.#coaches = splittedCoachNames.map((name) => new Coach(name));
    this.#menu = new Menu();
  }

  #validateCoachNames(coachNames) {
    if (!isLengthOverMin(COACH_COUNT_RANGE.min, coachNames)) {
      throw new Error(ERROR_MESSAGE.coachCountUnderMin);
    }
    if (!isLengthUnderMax(COACH_COUNT_RANGE.max, coachNames)) {
      throw new Error(ERROR_MESSAGE.coachCountOverMax);
    }
  }

  getCoachNames() {
    return this.#coaches.map((coach) => coach.name);
  }

  setCoachUnavailableMenus(coachName, menus) {
    this.#coaches.forEach((coach) => {
      if (coach.name === coachName) coach.setUnavailableMenus(menus);
    });
  }

  pickMenus() {
    const categoryResult = [];

    const duplicateCount = new Map();
    for (let i = 0; i < 5; i++) {
      let category = this.#pickCategory(duplicateCount, categoryResult);
      while (duplicateCount.get(category) > 2) {
        category = this.#pickCategory(duplicateCount, categoryResult);
      }

      this.#coaches.forEach((coach) => {
        coach.pickMenu(category.menus, i);
      });

      categoryResult[i] = category.categoryName;
    }

    const coachesResult = this.#coaches.map((coach) => {
      return { name: coach.name, menus: coach.selectedMenus };
    });
    return { categoryResult, coachesResult };
  }

  #pickCategory(duplicateCount, categoryResult) {
    const pickedCategory = this.#menu.pickCategories();
    const pickedCategoryName = pickedCategory.categoryName;

    const isPicked = categoryResult.some(
      ({ category }) => category === pickedCategoryName,
    );
    if (isPicked) {
      duplicateCount.set(
        pickedCategoryName,
        (duplicateCount.get(pickedCategoryName) ?? 0) + 1,
      );
    }

    return pickedCategory;
  }
}

module.exports = SuggestManager;
