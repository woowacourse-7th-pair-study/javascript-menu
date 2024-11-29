import { Random } from '@woowacourse/mission-utils';
import { SAMPLE } from '../App.js';

class MenuRecommendMachine {
  #category;

  constructor() {
    this.#category = Object.keys(SAMPLE);
  }

  chooseRandomCategory() {
    const randomIndex = Random.pickNumberInRange(1, 5);

    return this.#category[randomIndex - 1];
  }
}

export default MenuRecommendMachine;
