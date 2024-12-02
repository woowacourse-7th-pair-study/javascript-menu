const menuPicker = require('../util/menuPicker.js');

class Coach {
  #name;
  #hateMenu;

  constructor(name) {
    this.#name = name;
  }

  setHateMenu(hateMenu) {
    this.#hateMenu = hateMenu;
  }

  getWeeklyMenu(categories) {
    return menuPicker(categories, this.#hateMenu);
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
