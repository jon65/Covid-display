class Car{
    constructor(rego,age,value,make,model){
          this._rego = rego;
          this._age = age;
          this._value = value;
          this._make = make;
          this._model = model;
    }

    set value(newValue){
        if (newValue > 0){
            this._value = newValue;
        }
    }
    
    get value(){
        return this._value;
    }
}

var myCar = new Car("abc123",3,10000,"mazda","3");
myCar.value -= 2000; //depreciation
console.log(myCar.value)