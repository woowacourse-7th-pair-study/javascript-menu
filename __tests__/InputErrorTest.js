import { parseCantEatMenuInput } from '../src/parser/parseCantEatMenuInput.js';
import { parseCoachNamesInput } from '../src/parser/parseCoachNamesInput.js';
import { validateCantEatMenu } from '../src/validator/validateCantEatMenu.js';
import { validateCoachNames } from '../src/validator/validateCoachNames.js';

const coachNamesTestCase = [
  '', // 입력값이 비어 있을 경우 인원수가 최소 2명이기 때문에 에러
  '제,임,스', // 코치 이름이 2자 미만일 경우
  '제임스스스,구구구', // 코치 이름이 4자 초과일 경우
  '구구,제임스,구구', // 코치 이름이 중복될 경우
  '구,구,제,임,스,권', // 코치 인원수가 최대 5명 초과할 경우
];

const cantEatMenuTestCase = [
  ['규동,', '규동,'],
  ['규동,규동', '규동,규동'],
  ['규동,가츠동,스시', '규동,가츠동,스시'],
  ['존재하지 않는 메뉴', '존재하지 않는 메뉴'],
];

describe('코치 이름 입력 - 예외 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test.each(coachNamesTestCase)('코치 이름 입력 예외 처리', (input) => {
    expect(() => {
      const names = parseCoachNamesInput(input);
      validateCoachNames(names);
    }).toThrow('[ERROR]');
  });
});

describe('못 먹는 메뉴 입력 - 예외 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test.each(cantEatMenuTestCase)('못 먹는 메뉴 입력 예외 처리', (input) => {
    expect(() => {
      const cantEatMenuArray = parseCantEatMenuInput(input);
      validateCantEatMenu(cantEatMenuArray);
    }).toThrow('[ERROR]');
  });
});
