const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY_INDEX } = require('../constant/menu.js');

const categoryPicker = () => {
  const categories = [];

  while (categories.length < 5) {
    const category = CATEGORY_INDEX[Random.pickNumberInRange(1, 5)];
    if (categories.filter((item) => item === category).length < 2) {
      categories.push(category);
    }
  }

  return categories;
};

module.exports = categoryPicker;
