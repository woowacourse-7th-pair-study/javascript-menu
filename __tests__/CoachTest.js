const Coach = require('../src/Coach.js');
const ERROR_MESSAGE = require('../src/constants/errorMessage.js');

const errorCase = [
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

test.each(errorCase)(
  '$caseName 예외가 발생한다.',
  async ({ inputs, errorMessage }) => {
    inputs.forEach(async (input) => {
      await expect(() => new Coach(input)).toThrow(errorMessage);
    });
  },
);
