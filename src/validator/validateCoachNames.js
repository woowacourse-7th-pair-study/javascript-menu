import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/ruls.js';
import { throwWoowaError } from '../util/error.js';

export const validateCoachNames = (names) => {
  if (names.length < RULE.coachNum.min || names.length > RULE.coachNum.max)
    throwWoowaError(ERROR_MESSAGE.invalidCoachNumberOfPeople);

  if (new Set(names).size !== names.length)
    throwWoowaError(ERROR_MESSAGE.invalidCoachNameDuplicate);

  names.forEach((name) => {
    const nameLength = name.length;
    if (nameLength < RULE.coachName.min || nameLength > RULE.coachName.max)
      throwWoowaError(ERROR_MESSAGE.invalidCoachNameLength);
  });
};
