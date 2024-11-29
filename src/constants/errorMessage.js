const { COACH_NAME_COUNT_RANGE, COACH_COUNT_RANGE } = require('./rule');

const ERROR_MESSAGE = {
  noBlank: '[ERROR] 공백은 입력할 수 없습니다.',
  coachNameUnderMin: `[ERROR] 코치의 이름은 최소 ${COACH_NAME_COUNT_RANGE.min}글자 이상 이어야 합니다.`,
  coachNameOverMax: `[ERROR]코치의 이름은 최대 ${COACH_NAME_COUNT_RANGE.max}글자 이하여야 합니다.`,
  coachCountUnderMin: `[ERROR] 코치는 최소 ${COACH_COUNT_RANGE.min}명 이상 입력해야 합니다.`,
  coachCountOverMax: `[ERROR] 코치는 최대 ${COACH_COUNT_RANGE.max}명까지 입력할 수 있습니다.`,
};

exports.ERROR_MESSAGE = ERROR_MESSAGE;
