class Computer {
    constructor(name, ram, processorpower) {
        this.name = name
        this.ram = ram
        this.processorpower = processorpower
    }

    trunOn() {
        console.log(`The computer ${this.name} is now ON`)
    }

    upgrade() {
        const maxprocessorpower = this.processorpower * 0.1
        this.processorpower += maxprocessorpower
        console.log(`Processor power upgraded to ${this.processorpower}`);
    }

    upgradeRam() {
        this.ram *= 2
        console.log(`RAM upgraded to ${this.ram} GB`);
    }
}

class LapTop extends Computer {
    constructor(name, ram, processorpower, monitorSize) {
        super(name, ram, processorpower)
        this.monitorSize = monitorSize
    }
    calculateBatteryLife() {
        return this.processorpower / (this.monitorSize * this.ram)
    }
}

class UlrtaLapTop extends LapTop {
    constructor(name, ram, processorpower, monitorSize, weight) {
        super(name, ram, processorpower, monitorSize)
        this.weight = weight
    }

    trunOn() {
        if(this.weight > 2 && this.calculateBatteryLife() < 4) {
            console.log('error')
        } else {
            console.log(`The ultrabook ${this.name} is mow ON`)
        }
    }
}

class PC extends Computer {
    constructor(name, ram, processorpower) {
        super(name, ram, processorpower)
    }

    trunOnGame(gameName) {
        const fpsCount = this.processorpower / this.ram
        console.log(`You are plaing ${gameName} with ${fpsCount} FPS`)
    }
}

class GamePc extends PC {
    constructor(name, ram, processorpower) {
        super(name, ram, processorpower)
    }
    trunOn(gameName) {
        if(this.processorpower < 500 && this.ram < 8) {
            console.log(`що на цьому ${this.name} відрі ігри не запускаються.`)
            return 
        }
        const fpsCount = (this.processorpower / this.ram) * 2
        this.processorpower -= this.processorpower * 0.001;
        console.log(console.log(`You are playing ${gameName} with ${fpsCount.toFixed(2)} FPS. Processor power is now ${this.processorpower.toFixed(2)}`))
    }
}

const asus = new GamePc('asus', 16, 600);
console.log(asus);
asus.trunOn()
asus.trunOn('CS')

class Car {
    constructor(model, producer, yearOfrelease, maxSpeed, enginesize) {
        this.model = model
        this.producer = producer
        this.yearOfrelease = yearOfrelease
        this.maxSpeed = maxSpeed
        this.enginesize = enginesize
    }

    drive() {
        console.log(`We drive ${this.maxSpeed} at hours`)
    }

    infoCar() {
        console.log(`info about this car, ${this.model}, ${this.producer}, ${this.maxSpeed}, ${this.enginesize}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Max speed increased to ${this.maxSpeed} km/h`);
    }

    changeYear(newValue) {
        this.yearOfrelease = newValue;
        console.log(`Year of release changed to ${this.yearOfrelease}`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Driver added:`, driver);
    }
}

const tesla = new Car('model x', 'ilon mask', 2023, 160, 2.4)
console.log(tesla)
tesla.drive()
tesla.infoCar()
tesla.increaseMaxSpeed(200)
tesla.changeYear(2024)
tesla.addDriver('artur')

class Cinderella {
    constructor(name, age, sizeFoot) {
        this.name = name
        this.age = age
        this.sizeFoot = sizeFoot
    }
}

const cinderellas = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Bella', 21, 37),
    new Cinderella('Catherine', 18, 38),
    new Cinderella('Diana', 22, 39),
    new Cinderella('Ella', 20, 36.5),
    new Cinderella('Fiona', 23, 37.5),
    new Cinderella('Giselle', 19, 38.5),
    new Cinderella('Hanna', 21, 39.5),
    new Cinderella('Isabella', 22, 40),
    new Cinderella('Julia', 18, 35)
]

class Pritz {
    constructor(name, age, slipper) {
        this.name = name
        this.age = age 
        this.slipper = slipper
    }

    findCinderella(Cinderella) {
        for(let i = 0; i < cinderellas.length; i++) {
           
        }
    }
}

const artur = new Pritz('Julia', 18, 35)
console.log(artur)
artur.findCinderella()