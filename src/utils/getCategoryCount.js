import { MENU_CATEGORY_NUM } from '../constants/constants.js';

const getCategoryCount = (categorys, randomNum) => {
  if (!categorys) return 0;

  return categorys.filter((category) => {
    category === MENU_CATEGORY_NUM[randomNum];
  }).length;
}

export default getCategoryCount;
