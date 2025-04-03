// Primitive             Non Primitive Types 
//   -> Number                 -> Array 
//   -> String                 -> Tuple 
//   -> Boolean                -> Object
//   -> undefined
//   -> symbol
//   -> null

{

  let name : string = "Arif"
  let number : Number = 82
  let isAdmin : boolean = true
  let  unknown : undefined
  let noNumber : null
  let age : Number    
  age = 12
  // age = '12' error 
  //  Array
  let mobile : string[] = ["Realme","Samsung","Oppo"]

  mobile.push("xioami")
  mobile.push("xioami")
  // mobile.push(12) //
  mobile.push("Iphone")
  mobile.push("Nokia")

  let id :Number[] = [101,102,103,104,105]
  // id.push('a')  error 

  id.push(105)

  // * Tuple -> array -> order of maintaine in dataType -> type of values

  let Details : [string,Number,boolean] = ['Arif',22,true]
  Details

}