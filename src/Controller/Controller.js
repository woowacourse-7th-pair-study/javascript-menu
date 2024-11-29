import Output from '../View/Output.js';

class Controller {
  start() {
    this.#printStart();
  }

  #printStart() {
    Output.printStartMessage();
  }
}

export default Controller;
