const { ERROR_MESSAGE } = require('./constants/errorMessage');
const { isLengthOverMin, isLengthUnderMax } = require('./utils/validationUtil');
const { splitString } = require('./utils/commonUtil');
const { UNAVAILABLE_MENU_COUNT_RANGE } = require('./constants/rule');

class Coach {
  #name;
  #unavailableMenus;

  constructor(input) {
    const trimmedInput = input.trim();
    this.#validateName(trimmedInput);
    this.#name = trimmedInput;
  }

  #validateName(input) {
    if (!isLengthOverMin(2, input)) {
      throw new Error(ERROR_MESSAGE.coachNameUnderMin);
    }
    if (!isLengthUnderMax(4, input)) {
      throw new Error(ERROR_MESSAGE.coachNameOverMax);
    }
  }

  get name() {
    return this.#name;
  }

  setUnavailableMenus(menusInput) {
    const splittedMenus = splitString(menusInput, ',');
    this.#validateMenus(splittedMenus);
    this.#unavailableMenus = splittedMenus.map((menu) => menu.trim());
  }

  #validateMenus(menus) {
    if (!isLengthUnderMax(UNAVAILABLE_MENU_COUNT_RANGE.max, menus)) {
      throw new Error(ERROR_MESSAGE.unavailableMenuCountOverMax);
    }
  }
}

module.exports = Coach;
