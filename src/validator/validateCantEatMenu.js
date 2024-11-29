import { ERROR_MESSAGE } from '../constant/error.js';
import { SAMPLE } from '../App.js';
import { throwWoowaError } from '../util/error.js';

export const validateCantEatMenu = (menus) => {
  if (menus.length > 2) throwWoowaError(ERROR_MESSAGE.invalidCantEatMenuLength);

  menus.forEach((menu) => {
    const allMenu = Object.values(SAMPLE).reduce(
      (acc, cur) => acc.concat(cur.split(',').map((item) => item.trim())),
      [],
    );
    if (!allMenu.includes(menu)) throwWoowaError(ERROR_MESSAGE.invalidMenuName);
  });
};
