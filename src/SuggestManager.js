const Coach = require('./Coach');
const { COACH_COUNT_RANGE } = require('./constants/rule');
const Menu = require('./Menu');
const { splitString } = require('./utils/commonUtil');
const { isLengthOverMin, isLengthUnderMax } = require('./utils/validationUtil');

class SuggestManager {
  #coaches;
  #menu;
  #result = [{ category: '', coaches: [] }];

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
    const duplicateCount = new Map();
    for (let i = 0; i < 5; i++) {
      const category = this.#pickCategory(duplicateCount);

      let coachesPick = [];
      this.#coaches.forEach((coach) => {
        const menu = coach.pickMenu(category.menus);
        coachesPick.push({ name: coach.name, menu });
      });

      this.#result[i] = {
        category: category.categoryName,
        coaches: coachesPick,
      };
    }
    console.log(this.#result);
  }

  #pickCategory(duplicateCount) {
    const pickedCategory = this.#menu.pickCategories();
    const pickedCategoryName = pickedCategory.categoryName;

    const isPicked = this.#result.some(
      ({ category }) => category === pickedCategoryName,
    );
    if (isPicked) {
      duplicateCount.set(
        pickedCategoryName,
        (duplicateCount.get(pickedCategoryName) ?? 0) + 1,
      );
    }

    if (duplicateCount.get(pickedCategoryName) > 2) {
      return this.#menu.pickCategories();
    }

    return pickedCategory;
  }
}

module.exports = SuggestManager;
