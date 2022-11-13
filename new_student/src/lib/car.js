class Car {
    constructor(color, wheels, engine) {
        this._color = color;
        this._wheels = wheels;
        this._engine = engine;
    }

    setColor(color) {
        this._color = color
    }

    getColor() {
        return this._color
    }

    setWheels(wheel) {
        this._wheels = wheel
    }

    getWheels() {
        return this._wheels
    }

    setEngine(engine) {
        this._engine = engine
    }

    getEngine() {
        return this._engine
    }

}

module.exports = Car;