import validateMenuCannotEat from '../src/utils/validateMenuCannotEat.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

describe('validateMenuCannotEat 메서드 테스트', () => {
  const allMenus = [
    {
      category: '일식',
      menus: [ '규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼' ]
    },
    {
      category: '한식',
      menus: [ '김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음' ]
    },
    {
      category: '중식',
      menus: [ '깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채' ]
    },
    {
      category: '아시안',
      menus: [ '팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'
      ]
    },
    {
      category: '양식',
      menus: [ '라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니' ]
    }
  ]

  test.each([
    // given
    [ '메뉴가 0 ~ 2개 사이가 아닌 경우', [ '쌈밥', '나시고렝', '끼슈', '뇨끼' ], ERROR_MESSAGES.NUM_OF_MENUS],
    [ '메뉴 이름이 중복되는 경우', [ '스시', '스시' ], ERROR_MESSAGES.DUPLICATE_MENUS],
    [ '존재하지 않는 메뉴인 경우', [ '없는 메뉴' ], ERROR_MESSAGES.NON_EXIST],
  ])('%s', (_, menuCannotEat, errorMessage) => {
    // when & then
    expect(() => {
      validateMenuCannotEat(menuCannotEat, allMenus);
    }).toThrow(errorMessage);
  });
});
