// Shouldn't I be able to avoid having to use this in toString since I have all the this listed out inside of my constructor?

//Part one

class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
       return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
};

let Elantra = new Vehicle("Hyundai", "Elantra", "2020");

// Part Two

class Car extends Vehicle {
    
    constructor (make, model, year) {
     super(make,model,year);
     this.numWheels = 4;
    }

}

let myFirstCar = new Car('Toyota', 'Corolla', 2005);


//Part Three

class Motorcycle extends Vehicle {

    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine () {
        return "VROOM!!!"
    }
}

let myFirstMotorcycle = new Motorcycle ('Yokohoma', 'Tokyo Teleporter', 2023);


//Part Four
class Garage {
    constructor (capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if(vehicle instanceof Vehicle) {
        if (this.vehicles.length < this.capacity) {
            this.vehicles.push(vehicle);
            return "Vehicle added!"   
        }
        else {
            return "Sorry, we're full."
        }
    }
    else {
        return "Not a vehicle try again!"
    }
}
}

let houseGarage = new Garage(2)
// garage.vehicles = [];

// Logic I eventually want to use
// If the vehicle.length is > capacity then return "Sorry we're full"
// Else just keep allowing the user to add vehicles to garage
