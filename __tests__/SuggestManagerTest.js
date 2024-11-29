const ERROR_MESSAGE = require('../src/constants/errorMessage.js');
const SuggestManager = require('../src/SuggestManager.js');

const errorCase = [
  {
    caseName: '코치가 2명 미만인 경우',
    inputs: ['지예', ''],
    errorMessage: ERROR_MESSAGE.coachCountUnderMin,
  },
  {
    caseName: '코치가 5명을 초과한 경우',
    inputs: [
      '지예, 포비, 토미, 제임스, 제니퍼, 하이',
      '상우,명석,다은,재영,수연,지예',
    ],
    errorMessage: ERROR_MESSAGE.coachCountOverMax,
  },
];
describe('SuggestManager 테스트', () => {
  let suggestManager;

  beforeEach(() => {
    suggestManager = new SuggestManager();
  });

  test.each(errorCase)(
    '$caseName 예외가 발생한다.',
    ({ inputs, errorMessage }) => {
      inputs.forEach(async (input) => {
        expect(() => suggestManager.setCoaches(input)).toThrow(errorMessage);
      });
    },
  );
});
