import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';

export const validateCantEatMenu = (menus) => {
  if (menus.length < 0 || menus.length > 2)
    throwWoowaError(ERROR_MESSAGE.invalidCantEatMenuLength);
};
