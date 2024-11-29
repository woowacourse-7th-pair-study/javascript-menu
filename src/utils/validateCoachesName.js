const isNameLength = (name) => {
  if (name.length < 2 || name.length > 4) {
    throw new Error('[ERROR] 코치 이름은 2에서 4글자 사이여야 합니다. 다시 입력해 주세요.');
  }
}

const isNumOfCoaches = (coachesName) => {
  if (coachesName.length < 2 || coachesName.length > 5) {
    throw new Error('[ERROR] 코치 인원 수는 2명에서 5명 사이여야 합니다. 다시 입력해 주세요.');
  }
}

const isDuplicate = (coachesName) => {
  const coachesNameSet = new Set(coachesName);
  if (coachesName.length !== coachesNameSet.size) {
    throw new Error('[ERROR] 코치들의 이름은 중복될 수 없습니다. 다시 입력해 주세요.');
  }
}

const validateCoachesName = (coachesName) => {
  coachesName.forEach((name) => isNameLength(name));
  isNumOfCoaches(coachesName);
  isDuplicate(coachesName);
}

export default validateCoachesName;
