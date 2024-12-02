const validateName = (names) => {
  isWrongPeopleNumber(names);
  isSameName(names);

  names.forEach((name) => {
    isWrongLength(name);
    isEmpty(name);
  });
};

const isWrongLength = (name) => {
  if (name.length > 4 || name.length < 2) {
    throw new Error('[ERROR] 이름의 길이는 2자 이상 4자 이하여야 합니다.');
  }
};

const isSameName = (names) => {
  if (names.length !== new Set(names).size) {
    throw new Error('[ERROR] 중복된 이름은 입력할 수 없습니다.');
  }
};

const isWrongPeopleNumber = (names) => {
  if (names.length > 5 || names.length < 2) {
    throw new Error('[ERROR] 최소 2명 최대 5명의 사람이 같이 식사해야 합니다.');
  }
};

const isEmpty = (name) => {
  if (name === '') {
    throw new Error('[ERROR] 이름은 공백을 입력할 수 없습니다.');
  }
};

module.exports = validateName;
