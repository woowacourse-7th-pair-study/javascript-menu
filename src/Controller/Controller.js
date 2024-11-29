import Input from '../View/Input.js';
import Output from '../View/Output.js';

class Controller {
  start() {
    this.#printStart();

    this.#getValidatedCoachNames();
  }

  #printStart() {
    Output.printStartMessage();
  }

  #getValidatedCoachNames() {
    Input.getCoachNames()((input) => input);
  }
}

export default Controller;
