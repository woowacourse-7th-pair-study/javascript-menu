import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class Controller {
  async start() {
    this.#printStart();

    const coachNames = await this.#getValidatedCoachNames();

    const cantEatMenu = await this.#getValidatedCantEatMenu(coachNames);
  }

  #printStart() {
    Output.printStartMessage();
  }

  #getValidatedCoachNames() {
    return Input.getCoachNames()((input) => {
      const names = input.split(',').map((name) => name.trim());
      this.#validateCoachNames(names);

      return names;
    });
  }

  #validateCoachNames(names) {
    if (names.length < 2 || names.length > 5)
      throwWoowaError(ERROR_MESSAGE.invalidCoachNumberOfPeople);

    if (new Set(names).size !== names.length)
      throwWoowaError(ERROR_MESSAGE.invalidCoachNameDuplicate);

    names.forEach((name) => {
      this.#validateEachName(name);
    });
  }

  #validateEachName(name) {
    const nameLength = name.length;
    if (nameLength < 2 || nameLength > 4)
      throwWoowaError(ERROR_MESSAGE.invalidCoachNameLength);
  }

  async #getValidatedCantEatMenu(coachNames) {
    const cantEatMenus = [];
    for (const name of coachNames) {
      const cantEatMenu = await Input.getCantEatMenu(name)((input) => {
        const cantEatMenuArray = input.split(',');
        this.#validateCantEatMenu(cantEatMenuArray);

        return cantEatMenuArray;
      });

      cantEatMenus.push(cantEatMenu);
    }

    return cantEatMenus;
  }

  #validateCantEatMenu(menus) {
    if (menus.length < 0 || menus.length > 2)
      throwWoowaError(ERROR_MESSAGE.invalidCantEatMenuLength);
  }
}

export default Controller;
