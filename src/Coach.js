const { ERROR_MESSAGE } = require('./constants/errorMessage');
const { isLengthOverMin, isLengthUnderMax } = require('./utils/validationUtil');

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
}

module.exports = Coach;
