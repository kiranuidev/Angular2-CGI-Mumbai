class Vehicle implements IVehicle{
     
     constructor(){
         console.log("Welcome to vehicle");
     }
     getVehicle(){
         return "XXX";
     }
}


interface IVehicle{
    getVehicle():String
}
class Car extends Vehicle{
        constructor(){
            console.log("Hello world");
            super();
        }
}