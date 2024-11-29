import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcome() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  /**
   * 
   * 추천 메뉴 리스트
   * [ 
   *   { name: '구구', menus: [ '김치찌개', '스파게티', '규동', '짜장면', '카오 팟' ] }, 
   *   { name: '제임스', menus: [ '제육볶음', '라자냐', '가츠동', '짬뽕', '파인애플 볶음밥' ] }, 
   * ]
   * @param {Array<string>} categorys 
   * @param {Array<{ name: string, menus: Array<string> }>} menuResults 
   */
  printResult(categorys, menuResults) {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');

    const parsedCategorys = categorys.join(' | ');
    Console.print(`[ 카테고리 | ${parsedCategorys} ]`);

    menuResults.forEach(({ name, menus }) => {
      const parsedMenus = menus.join(' | ');
      Console.print(`[ ${name} | ${parsedMenus} ]`);
    });
		Console.print('\n추천을 완료했습니다.');
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
