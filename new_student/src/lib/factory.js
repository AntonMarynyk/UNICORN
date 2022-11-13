const warehouse = require('./warehouse')
const Car = require('./car')

class Factory {
    constructor(energy) {
        this._energy = energy;
        this._warehouse = warehouse;
    }

    produceCar(color = "red", wheels = 4, engine = false) {
        if(this._energy < 2) 
            return null

        this._energy -= 2;
        const newCar = new Car(color, wheels, engine)
        this._warehouse.createdCars.push(newCar)
        return newCar
    }
    
    addEnergyPower(value=0){
        this._energy += value;
    }

    getWarehouse() {
        return this._warehouse;
    }

    changeCarColor(car, newColor="blue") {
        if(this._energy < 1) 
            return null

        this._energy -= 1;
        car.setColor(newColor)
    }
}

module.exports = Factory;