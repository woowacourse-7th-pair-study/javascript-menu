import { ERROR_MESSAGES } from '../constants/constants.js';

const isNameLength = (name) => {
  if (name.length < 2 || name.length > 4) {
    throw new Error(ERROR_MESSAGES.NAME_LENGTH);
  }
}

const isNumOfCoaches = (coachesName) => {
  if (coachesName.length < 2 || coachesName.length > 5) {
    throw new Error(ERROR_MESSAGES.NUM_OF_COACHES);
  }
}

const isDuplicate = (coachesName) => {
  const coachesNameSet = new Set(coachesName);
  if (coachesName.length !== coachesNameSet.size) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_COACHES_NAME);
  }
}

const validateCoachesName = (coachesName) => {
  coachesName.forEach((name) => isNameLength(name));
  isNumOfCoaches(coachesName);
  isDuplicate(coachesName);
}

export default validateCoachesName;
