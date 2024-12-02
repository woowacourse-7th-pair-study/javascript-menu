import { ERROR_MESSAGE } from '../constant/error.js';
import { SAMPLE } from '../App.js';
import { throwWoowaError } from '../util/error.js';
import { RULE } from '../constant/ruls.js';

export const validateCantEatMenu = (menus) => {
  if (menus.length > RULE.menuMaxLength)
    throwWoowaError(ERROR_MESSAGE.invalidCantEatMenuLength);

  if (menus.length === RULE.menuMaxLength && menus[0] === menus[1])
    throwWoowaError(ERROR_MESSAGE.invalidCantEatMenuDuplicate);

  menus.forEach((menu) => {
    const allMenu = Object.values(SAMPLE).reduce(
      (acc, cur) => acc.concat(cur.split(',').map((item) => item.trim())),
      [],
    );
    if (!allMenu.includes(menu)) throwWoowaError(ERROR_MESSAGE.invalidMenuName);
  });
};
