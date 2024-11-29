import { ERROR_MESSAGES } from '../constants/constants.js';

const isNumOfMenus = (menuCannotEat) => {
  if ((menuCannotEat.length < 0 || menuCannotEat.length > 2)) {
    throw new Error(ERROR_MESSAGES.NUM_OF_MENUS);
  }
}

const isDuplicate = (menuCannotEat) => {
  const menuCannotEatSet = new Set(menuCannotEat);
  if (menuCannotEat.length !== menuCannotEatSet.size) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_MENUS);
  }
}

/**
 * 
 * @param {string} eachMenu // 코치가 못 먹는 메뉴
 * @param {Array<{ category: string, menus: Array<string>}>} allMenus 
 */
const isExists = (eachMenu, allMenus) => {
  let checkExists = 0;

  allMenus.forEach(({ menus }) => { // 일식, 한식, 중식, 아시안, 양식에 대한 메뉴들
    if (menus.includes(eachMenu)) checkExists += 1;
  });

  if (checkExists === 0) {
    throw new Error(ERROR_MESSAGES.NON_EXIST);
  }
}

/**
 * 
 * @param {Array<string>} menuCannotEat 
 * @param {Array<{ category: string, menus: Array<string>}>} allMenus 
 */
const validateMenuCannotEat = (menuCannotEat, allMenus) => {
  isNumOfMenus(menuCannotEat);
  isDuplicate(menuCannotEat);
  menuCannotEat.forEach((eachMenu) => isExists(eachMenu, allMenus));
}

export default validateMenuCannotEat;
