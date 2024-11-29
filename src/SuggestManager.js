const Coach = require('./Coach');
const { COACH_COUNT_RANGE } = require('./constants/rule');
const { splitString } = require('./utils/commonUtil');
const { isLengthOverMin, isLengthUnderMax } = require('./utils/validationUtil');

class SuggestManager {
  #coaches;

  constructor() {}

  setCoaches(inputCoachNames) {
    const splittedCoachNames = splitString(inputCoachNames, ',');
    this.#validateCoachNames(splittedCoachNames);
    this.#coaches = splittedCoachNames.map((name) => new Coach(name));
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
}

module.exports = SuggestManager;
