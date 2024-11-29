import { ERROR_MESSAGE } from '../constant/error.js';
import { throwWoowaError } from '../util/error.js';
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
    Input.getCoachNames()((input) => {
      const names = input.split(',').map((name) => name.trim());

      if (names.length < 2 || names.length > 5)
        throwWoowaError(ERROR_MESSAGE.invalidCoachNumberOfPeople);

      if (new Set(names).size !== names.length)
        throwWoowaError(ERROR_MESSAGE.invalidCoachNameDuplicate);

      names.forEach((name) => {
        this.#validateEachName(name);
      });
    });
  }

  #validateEachName(name) {
    const nameLength = name.length;
    if (nameLength < 2 || nameLength > 4)
      throwWoowaError(ERROR_MESSAGE.invalidCoachNameLength);
  }
}

export default Controller;
