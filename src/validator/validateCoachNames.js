import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';

export const validateCoachNames = (names) => {
  if (names.length < 2 || names.length > 5)
    throwWoowaError(ERROR_MESSAGE.invalidCoachNumberOfPeople);

  if (new Set(names).size !== names.length)
    throwWoowaError(ERROR_MESSAGE.invalidCoachNameDuplicate);

  names.forEach((name) => {
    const nameLength = name.length;
    if (nameLength < 2 || nameLength > 4)
      throwWoowaError(ERROR_MESSAGE.invalidCoachNameLength);
  });
};
