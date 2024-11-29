import { Random } from '@woowacourse/mission-utils';

class Recommand {
  /** @type {Array<string>} 해당 코치가 추천 받은 월 ~ 금 메뉴들 */ #recommandedMenus = [];

  /**
   * 해당 코치의 월 ~ 금 메뉴를 각 카테고리 별로 추천한다.
   * 단, 못 먹는 메뉴는 제외해야 하며, 중복되지 않는 메뉴를 추천해야 한다.
   * @param {Array<string>} menuCannotEat 못먹는 메뉴들
   * @param {Array<string>} categorys 월 ~ 금 전체 카테고리
   * @param {Array<{ category: string, menus: Array<string>}>} allMenus 전체 메뉴 리스트
   */
  getRecommandedMenus(menuCannotEat, categorys, allMenus) {
    categorys.forEach((eachCategory) => {
      const menusByCategory = allMenus.filter(({ category }) => category === eachCategory)[0].menus;
      const indexArray = Array.from({ length: menusByCategory.length }, (_, i) => i);
      const recommandedMenuIndex = this.#recommandMenuIndex(indexArray, menusByCategory, menuCannotEat);

      this.#recommandedMenus.push(menusByCategory[recommandedMenuIndex]);
    });
    return this.#recommandedMenus;
  }

  /**
   * 추천 메뉴의 인덱스를 반환한다.
   * @param {Array<number>} indexArray 
   * @param {Array<string>} menusByCategory 
   * @param {Array<string>} menuCannotEat 
   * @returns {number}
   */
  #recommandMenuIndex(indexArray, menusByCategory, menuCannotEat) {
    let recommandedMenuIndex = 0;
    do {
      recommandedMenuIndex = Random.shuffle(indexArray)[0];
    } while (
      this.#checkDuplicateMenu(menusByCategory[recommandedMenuIndex]) 
      || this.#checkCannotEatMenu(menuCannotEat, menusByCategory[recommandedMenuIndex])
    );
    return recommandedMenuIndex;
  }

  /**
   * 메뉴 중복되는지 확인
   * @param {string} recommandedMenu 
   * @returns {boolean}
   */
  #checkDuplicateMenu(recommandedMenu) {
    if (!this.#recommandedMenus) return false;
    return this.#recommandedMenus.includes(recommandedMenu);
  }

  /**
   * 못 먹는 메뉴인지 확인
   * @param {Array<string>} menuCannotEat 
   * @param {string} recommandedMenu 
   * @returns {boolean}
   */
  #checkCannotEatMenu(menuCannotEat, recommandedMenu) {
    return menuCannotEat.includes(recommandedMenu);
  }
}

export default Recommand;
