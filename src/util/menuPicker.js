const { Random } = require('@woowacourse/mission-utils');

const { MENU } = require('../constant/menu.js');

const menuPicker = (categories, hateMenu) => {
  const menus = [];
  let index = 0;

  while (index < 5) {
    const category = categories[index];
    const arrayForShuffle = Array.from(
      { length: MENU[category].length },
      (value, index) => index + 1,
    );
    const randomIndex = Random.shuffle(arrayForShuffle)[0];
    const menu = MENU[category][randomIndex - 1];

    if (!menus.includes(menu) && !hateMenu.includes(menu)) {
      menus.push(menu);
      index += 1;
    }
  }
  return menus;
};

module.exports = menuPicker;
