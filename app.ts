class Vehicle implements IVehicle{
     getVehicle(){
         return "XXX";
     }
}


interface IVehicle{
    getVehicle():String
}
class Car extends Vehicle{

}