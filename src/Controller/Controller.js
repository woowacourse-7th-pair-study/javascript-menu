import { DAYS } from '../constant/days.js';
import MenuRecommendMachine from '../Model/MenuRecommendMachine.js';
import { validateCantEatMenu } from '../validator/validateCantEatMenu.js';
import { validateCoachNames } from '../validator/validateCoachNames.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class Controller {
  #menuRecommendMachine;
  #result = {};

  async start() {
    this.#printStart();

    const coachNames = await this.#getValidatedCoachNames();

    const cantEatMenu = await this.#getValidatedCantEatMenu(coachNames);

    this.#menuRecommendMachine = new MenuRecommendMachine(coachNames);

    this.#recommendMenuPerCoach(coachNames, cantEatMenu);

    this.#printResult(coachNames);
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

  #recommendMenuPerCoach(coachNames, cantEatMenu) {
    coachNames.forEach((name) => {
      this.#result[name] = [];
    });

    DAYS.forEach(() => {
      coachNames.forEach((name) => {
        const recommendedMenu = this.#menuRecommendMachine.chooseRecommendMenu(
          name,
          cantEatMenu[name],
        );
        this.#result[name] = [...this.#result[name], recommendedMenu];
      });
    });
  }

  #printResult(coachNames) {
    Output.printResultStartMessage();
    Output.printResultHeader();
    coachNames.forEach((name) => {
      Output.printRecommendMenuPerCoach(name, this.#result[name]);
    });
  }
}

export default Controller;
