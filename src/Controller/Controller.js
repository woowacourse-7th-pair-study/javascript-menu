import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';
import { validateCantEatMenu } from '../validator/validateCantEatMenu.js';
import { validateCoachNames } from '../validator/validateCoachNames.js';
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
      validateCoachNames(names);

      return names;
    });
  }

  async #getValidatedCantEatMenu(coachNames) {
    const cantEatMenus = [];
    for (const name of coachNames) {
      const cantEatMenu = await Input.getCantEatMenu(name)((input) => {
        const cantEatMenuArray = input.split(',');
        validateCantEatMenu(cantEatMenuArray);

        return cantEatMenuArray;
      });

      cantEatMenus.push(cantEatMenu);
    }

    return cantEatMenus;
  }
}

export default Controller;
