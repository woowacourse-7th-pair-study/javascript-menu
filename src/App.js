const Coach = require('./Coach.js');
const View = require('./View.js');
const { ERROR_MESSAGE } = require('./constants/errorMessage.js');
const { splitString } = require('./utils/commonUtil.js');
const {
  isLengthOverMin,
  isLengthUnderMax,
} = require('./utils/validationUtil.js');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  #coaches;

  async play() {
    View.printStartMessage();
    await this.#getCoachNames();
  }

  async #getCoachNames() {
    try {
      const coachNamesInput = await View.readCoachName();
      const splittedCoachNames = splitString(coachNamesInput, ',');

      if (!isLengthOverMin(2, splittedCoachNames)) {
        throw new Error(ERROR_MESSAGE.coachCountUnderMin);
      }
      if (!isLengthUnderMax(5, splittedCoachNames)) {
        throw new Error(ERROR_MESSAGE.coachCountOverMax);
      }

      this.#coaches = splittedCoachNames.map((name) => new Coach(name));
    } catch (error) {
      View.printMessage(error.message);
      await this.#getCoachNames();
    }
  }
}

module.exports = App;
