import validateCoachesName from '../src/utils/validateCoachesName.js';

describe('validateCoachesName 메서드 테스트', () => {
  test.each([
    // given
    [ '이름이 2 ~ 4 글자가 아닌 경우', [ '최수연입니다', '제임스' ], '[ERROR] 코치 이름은 2에서 4글자 사이여야 합니다. 다시 입력해 주세요.'],
    [ '코치 인원이 2 ~ 5명 사이가 아닌 경우', [ '최수연' ], '[ERROR] 코치 인원 수는 2명에서 5명 사이여야 합니다. 다시 입력해 주세요.'],
    [ '코치 인원이 2 ~ 5명 사이가 아닌 경우', [ '최수연', '하이', '토미', '제임스', '구구', '미미' ], '[ERROR] 코치 인원 수는 2명에서 5명 사이여야 합니다. 다시 입력해 주세요.'],
    [ '코치 이름이 중복되는 경우', [ '최수연', '최수연' ], '[ERROR] 코치들의 이름은 중복될 수 없습니다. 다시 입력해 주세요.'],
  ])('%s', (_, coachesName, errorMessage) => {
    // when & then
    expect(() => {
      validateCoachesName(coachesName);
    }).toThrow(errorMessage);
  });
});
