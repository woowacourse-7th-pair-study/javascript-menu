const View = require('./View');

class App {
  play() {
    View.printStartMessage();
    View.readCoachName();
  }
}

module.exports = App;
