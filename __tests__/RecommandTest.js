import Recommand from '../src/domains/Recommand.js';
import mockShuffles from '../src/utils/mockShuffles.js';

describe('Recommand 클래스 테스트', () => {

  test('각 코치별 월 ~ 금 메뉴를 카테고리에 따라 추천한다.', () => {
    // given
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
    const categorys = [ '한식', '한식', '중식', '양식', '아시안' ]; // 2, 2, 3, 5, 4
    const menusCannotEat = [ '짬뽕', '스시' ]; // 해당 코치가 못 먹는 메뉴들

    const sequenced = (_, idx) => idx + 1;
    mockShuffles([ // 1명의 코치에 대한 shuffle
      [3, Array.from({ length: 9 }, sequenced)], // 쌈밥
      [8, Array.from({ length: 9 }, sequenced)], // 떡볶이
      [3, Array.from({ length: 9 }, sequenced)], // 동파육
      [7, Array.from({ length: 9 }, sequenced)], // 스파게티
      [2, Array.from({ length: 9 }, sequenced)], // 카오 팟
    ]);

    // when
    const recommand = new Recommand();
    const recommandedMenus = recommand.getRecommandedMenus(menusCannotEat, categorys, allMenus);

    // then
    expect(recommandedMenus).toEqual([ '쌈밥', '떡볶이', '동파육', '스파게티', '카오 팟' ]);
  });
});
