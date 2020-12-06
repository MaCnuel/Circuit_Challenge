/*----------Global Parameters -------*/
const velMinimum = 170;
const velMaximum = 300;


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

    velocityChange(){
        do{
            this.velocity += 0.2*this.velocity*(Math.random()-0.5);
        } while (this.velocity<=velMinimum && this.velocity>=velMaximum); //Minimum and maximum stablished
        return this.velocity;
    }
}


/*-----------------Functions--------------------*/


function averageRoundTime(car, circuit) { //average time per round

    let nStops = circuit.Kms/ car.gas + circuit.Kms/car.tireLifeTime;
    let finalRoundTime = circuit.Kms/car.velocity + nStops * car.refuelTime;
    return finalRoundTime; 
}

function averageTime(car, circuit){ // Final average time
    let finalTime = 0;
    for(let i=0; i<circuit.rounds; i++){
        car.velocity = car.velocityChange();
        finalTime +=averageRoundTime(car, circuit);
    }

    return finalTime;
}



//Two cars to start
let Macklaren = new Car("Macklaren", 100, 250, 25, 150);
let Renault = new Car("Renault", 120, 230, 22, 160);

//One Circuit to start
let Valencia = new Circuit("Valencia", 10, 60);


console.log(`Average time for ${Macklaren.brand} is ${averageTime(Macklaren,Valencia)}`);

console.log(`Average time for ${Renault.brand} is ${averageTime(Renault,Valencia)}`);