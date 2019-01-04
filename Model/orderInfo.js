import {Model,BasicModel,ObjectModel} from 'objectmodel';
import 'es6-symbol/implement';



// nguoi gui
class CustomerSender extends ObjectModel ({
    customer_id:Number,
    name:String,
    phone: Number,
    MS_Thue: Number,
    email:String,
})
{
    get fullInfo(){return'${this.name} ${this.phone} ${this.MSThue} ${this.email}'}
}
//nguoi nhan
class CustomerRecover extends ObjectModel({
    name:String,
    phone:Number,
    address:String,
})
{
    get fullRecover(){return'${this.name} ${this.phone} ${this.address}'}
}
//hang hoa
class Comodity extends ObjectModel ({
    Img: String,
    vehicle_size: Number,
    weight:Number,
    amount:Number,
    type_comdity: String,
})
{
    get fullComodity(){return'${this.Img} ${this.vehicle_size} ${this.weight} ${this.amount} ${this.type_comdity}'}
}
//tai xe
class Driver extends ObjectModel({
    driver_id: Number,
    name: String,
    _birth :Number,
    identity_number:Number,//so CMT
    phone:Number,
    address: String,
    email:String,
    amount: Number,
    imgLicense:String, //bang lai xe
})
{
    get driver(){return'${this.name} ${this._birth} ${this.phone} ${this.ImgLicense}'}
    get fullDriver(){return'${driver_id} ${this.name} ${this._birth} ${this.identity_number} ${this.phone} ${this.address} ${this.email} ${this.amount} ${this.ImgLicense}'}
}
//phuong tien
class Transport extends Object({
    vehicleSize: Number,
    vehicleType: String,
    licensePlate:String, //bien so xe
    IMG_Registrasion: String, //giay to xe
    
})
{
    get fullTransport(){return'${this.vehicleSize} ${this.vehicleType} ${this.licensePlate} ${this.IMG_Registrasion}'}
}


export default class orderInfo extends Model({ 
    from: String,
    to: String ,
    time: String,
    items:String,
    weight:String,
    tempvehicleType: String,
    vehicleSize:String,
    amount:String
})
{
    get fullOrder(){ return `${this.from} ${this.to} ${this.time}${this.items}${this.weight}${this.tempvehicleType}${this.vehicleSize}${this.amount}`; }
}

let a = ''
let b = ''

export function SetA(val) {
    a= val;
}

