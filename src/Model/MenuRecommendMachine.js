import { Console, Random } from '@woowacourse/mission-utils';
import { SAMPLE } from '../App.js';

class MenuRecommendMachine {
  #category;
  #eatenMenuList = {};

  constructor(coachNames) {
    this.#category = Object.keys(SAMPLE);
    coachNames.forEach((name) => {
      this.#eatenMenuList[name] = Object.fromEntries(
        this.#category.map((value) => [value, []]),
      );
    });

    Console.print(this.#category);

    Console.print(this.#eatenMenuList);
  }

  chooseRandomCategory() {
    const randomIndex = Random.pickNumberInRange(1, 5);

    return this.#category[randomIndex - 1];
  }
}

export default MenuRecommendMachine;
