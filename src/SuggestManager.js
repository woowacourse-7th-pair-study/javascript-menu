const { COACH_COUNT_RANGE } = require('./constants/rule');

class SuggestManager {
  #coaches;

  constructor(inputCoachNames) {
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
}

exports.SuggestManager = SuggestManager;
