/*-------------Classes---------------*/

//Defining Circuit class

class Circuit {
    constructor(location,Kms, rounds){
        this.location = location;
        this.Kms = Kms;
        this.rounds = rounds;
    }   
}


//Defining Car Class

class Car {
    constructor(brand, gas, velocity, refuelTime, tireLifeTime){
        this.brand = brand;
        this.gas = gas;
        this.velocity = velocity; //It has to be random... I will have a look latter
        this.refuelTime = refuelTime;
        this.tireLifeTime = tireLifeTime;
    }
}

//Two cars to start
let Macklaren = new Car("Macklaren", 100, 250, 25, 150);
let Renault = new Car("Renault", 120, 230, 22, 160);

//One Circuit to start
let Valencia = new Circuit("Valencia", 10, 60);

 /*
let velFunction = velocity =>{
    return velocity +0.1* velocity * Math.random();
}
*/

function averageTime(KMS, rounds, vel, gas, refuelTime ) {

    let nStops = KMS*rounds/ gas;
    console.log (nStops);
    console.log(KMS, rounds, vel, gas, refuelTime);
    let finalTime = KMS/vel + nStops * refuelTime;
    console.log(finalTime);
    return finalTime; 
}

let timeMac = averageTime(Valencia.Kms,Valencia.rounds,Macklaren.velocity, Macklaren.gas, Macklaren.refuelTime);

console.log(`Average time for ${Macklaren.brand} is ${timeMac}`);

console.log(`Average time for ${Renault.brand} is ${averageTime(Valencia.Kms,Valencia.rounds,Renault.velocity, Renault.gas, Renault.refuelTime)}`);