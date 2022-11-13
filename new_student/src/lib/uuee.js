const Person = require("./person");

class Uuee extends Person {

  constructor(owner, state, uid) {
    super(state, uid);
    this._owner = owner
  }

  sayHello(caller) {
    if (caller !== this._owner) {
      return "No!"
    } else {
      return `Hello ${this._owner.getName()}`
    }
  }
}

module.exports = Uuee;