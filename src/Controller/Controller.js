import { DAYS } from '../constant/days.js';
import MenuRecommendMachine from '../Model/MenuRecommendMachine.js';
import { parseCantEatMenuInput } from '../parser/parseCantEatMenuInput.js';
import { parseCoachNamesInput } from '../parser/parseCoachNamesInput.js';
import { validateCantEatMenu } from '../validator/validateCantEatMenu.js';
import { validateCoachNames } from '../validator/validateCoachNames.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class Controller {
  #menuRecommendMachine;
  #resultCategory = [];
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
      const names = parseCoachNamesInput(input);
      validateCoachNames(names);

      return names;
    });
  }

  async #getValidatedCantEatMenu(coachNames) {
    const cantEatMenus = {};
    for (const name of coachNames) {
      const cantEatMenu = await Input.getCantEatMenu(name)((input) => {
        const cantEatMenuArray = parseCantEatMenuInput(input);
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
    this.#result.category = [];
    DAYS.forEach(() => {
      const { category, menus } =
        this.#menuRecommendMachine.chooseRecommendMenu(coachNames, cantEatMenu);
      this.#resultCategory.push(category);
      menus.forEach(([name, recommendedMenu]) => {
        this.#result[name] = [...this.#result[name], recommendedMenu];
      });
    });
  }

  #printResult(coachNames) {
    Output.printResultStartMessage();
    Output.printResultHeader(this.#resultCategory);
    coachNames.forEach((name) => {
      Output.printRecommendMenuPerCoach(name, this.#result[name]);
    });
    Output.printEndMessage();
  }
}

export default Controller;
