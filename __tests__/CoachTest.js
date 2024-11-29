const Coach = require('../src/Coach.js');
const ERROR_MESSAGE = require('../src/constants/errorMessage.js');

describe('예외케이스', () => {
  const coachNameErrorCase = [
    {
      caseName: '코치의 이름이 2글자 미만인 경우',
      inputs: ['하', '코', ''],
      errorMessage: ERROR_MESSAGE.coachNameUnderMin,
    },
    {
      caseName: '코치의 이름이 4글자 초과한 경우',
      inputs: ['하하하하하', '우아한테크코스'],
      errorMessage: ERROR_MESSAGE.coachNameOverMax,
    },
  ];

  test.each(coachNameErrorCase)(
    '$caseName 예외가 발생한다.',
    async ({ inputs, errorMessage }) => {
      inputs.forEach(async (input) => {
        await expect(() => new Coach(input)).toThrow(errorMessage);
      });
    },
  );

  const unavailableMenusErrorCase = [
    {
      caseName: '못 먹는 메뉴의 개수가 2개를 초과한 경우',
      inputs: ['깐풍기, 볶음면, 동파육', '스시, 가츠동, 오니기리'],
      errorMessage: ERROR_MESSAGE.unavailableMenuCountOverMax,
    },
  ];

  test.each(unavailableMenusErrorCase)(
    '$caseName 예외가 발생한다.',
    async ({ inputs, errorMessage }) => {
      const coach = new Coach('지예');

      inputs.forEach(async (input) => {
        await expect(() => coach.setUnavailableMenus(input)).toThrow(
          errorMessage,
        );
      });
    },
  );
});
