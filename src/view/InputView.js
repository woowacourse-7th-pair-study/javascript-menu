const { Console } = require('@woowacourse/mission-utils');

const INPUT_MESSAGE = require('../constant/input.js');
const validateName = require('../util/validator/nameValidator.js');
const validateMenu = require('../util/validator/menuValidator.js');

const InputView = {
  readNames(callback) {
    Console.readLine(INPUT_MESSAGE.name, (input) => {
      try {
        const names = input.split(',');
        validateName(names);
        callback(names);
      } catch (e) {
        Console.print(e.message);
        this.readNames(callback);
      }
    });
  },

  readHateMenu(name, callback) {
    Console.readLine(INPUT_MESSAGE.hate_menu(name), (input) => {
      try {
        if (input === '') {
          callback(['']);
          return;
        }
        const menus = input.split(',');

        validateMenu(menus);
        callback(menus);
      } catch (e) {
        Console.print(e.message);
        this.readHateMenu(name, callback);
      }
    });
  },
};

module.exports = InputView;
