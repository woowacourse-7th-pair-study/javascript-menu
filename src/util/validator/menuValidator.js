const { MENU } = require('../../constant/menu.js');

const validateMenu = (menus) => {
  isDuplicate(menus);
  isTooMany(menus);

  menus.forEach((menu) => {
    isNotExist(menu);
  });
};

const isNotExist = (menu) => {
  let exist = false;

  for (const key of Object.entries(MENU)) {
    if (MENU[key].includes(menu)) {
      exist = true;

      return;
    }
  }
  if (!exist) {
    throw new Error('[ERROR] 존재하지 않는 메뉴입니다.');
  }
};

const isDuplicate = (menus) => {
  if (menus.length !== new Set(menus).size) {
    throw new Error('[ERROR] 중복된 메뉴가 입력되었습니다.');
  }
};

const isTooMany = (menus) => {
  if (menus.length > 2) {
    throw new Error('[ERROR] 최대 2개의 메뉴만 입력할 수 있습니다.');
  }
};

module.exports = validateMenu;
