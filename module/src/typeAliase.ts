{
  // object type aliase
  type MobileProduct = {
    
      name : String,
      color : String,
      price : number,
      brand: String,
      isOkey:Boolean,
      indisplayFinger? : String
    
  }
  const Mobile : MobileProduct = {
    name : "Realme",
    color : "Black",
    price : 12,
    brand: "Realme",
    isOkey : true
  }
  const Mobile2 : MobileProduct = {
    name : "Samsunge",
    color : "white",
    price : 21,
    brand: "Samsung",
    isOkey : true
  }
  const Mobile3 :MobileProduct  = {
    name : "Realme",
    color : "Black",
    price : 12,
    brand: "Realme",
    isOkey : true,
    indisplayFinger:"no"
  }

  // * string type aliase 
  type color = string
  const color : color = "Green"
 // * funtion type aliase
  type add = (num1:number,num2:number) => number 

  const addTwoSum : add = (num1,num2) => num1 + num2 

}