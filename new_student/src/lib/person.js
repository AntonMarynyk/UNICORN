class Person {

    constructor(state = "active", uid = "0-0") {
      this._state = state;
      this._uid = uid;
      
      Person.count += 1;
    }
  
    getState() {
      return this._state;
    }
  
    setState(value) {
        if(value !== "active" && value !== "inactive")
            throw new Error('not valid state')
        this._state = value;
    }
  
    getUid() {
      return this._uid;
    }
  
    static getCountOfPersons() {
      return Person.count
    }
}
Person.count = 0;
  
module.exports = Person;