import validateCoachesName from '../src/utils/validateCoachesName.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

describe('validateCoachesName 메서드 테스트', () => {
  test.each([
    // given
    [ '이름이 2 ~ 4 글자가 아닌 경우', [ '최수연입니다', '제임스' ], ERROR_MESSAGES.NAME_LENGTH],
    [ '코치 인원이 2 ~ 5명 사이가 아닌 경우', [ '최수연' ], ERROR_MESSAGES.NUM_OF_COACHES],
    [ '코치 인원이 2 ~ 5명 사이가 아닌 경우', [ '최수연', '하이', '토미', '제임스', '구구', '미미' ], ERROR_MESSAGES.NUM_OF_COACHES],
    [ '코치 이름이 중복되는 경우', [ '최수연', '최수연' ], ERROR_MESSAGES.DUPLICATE_COACHES_NAME],
  ])('%s', (_, coachesName, errorMessage) => {
    // when & then
    expect(() => {
      validateCoachesName(coachesName);
    }).toThrow(errorMessage);
  });
});
