import MenuRecommendMachine from '../Model/MenuRecommendMachine.js';
import { validateCantEatMenu } from '../validator/validateCantEatMenu.js';
import { validateCoachNames } from '../validator/validateCoachNames.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class Controller {
  async start() {
    this.#printStart();

    const coachNames = await this.#getValidatedCoachNames();

    const cantEatMenu = await this.#getValidatedCantEatMenu(coachNames);

    const menuRecommendMachine = new MenuRecommendMachine(coachNames);
    coachNames.forEach((name) => {
      menuRecommendMachine.chooseRecommendMenu(name, cantEatMenu[name]);
    });
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
    const cantEatMenus = {};
    for (const name of coachNames) {
      const cantEatMenu = await Input.getCantEatMenu(name)((input) => {
        if (input === '') return [];
        const cantEatMenuArray = input.split(',');

        validateCantEatMenu(cantEatMenuArray);
        return cantEatMenuArray;
      });

      cantEatMenus[name] = cantEatMenu;
    }

    return cantEatMenus;
  }
}

export default Controller;
