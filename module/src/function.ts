{
  //  Normal Function
function addThreeSum(num1: number, num2: number, num3: number, num4?: number) : number{
  return num1 + num2 + num3
}

addThreeSum(2,3,4,5)
//  Arrow Function
const sum = (num1: number, num2: number, num3: number,num4 = 15): number => num1 + num2 + num3 + num4

//  object --> function --> method

const User = {
  name: 'Arif',
  balance : 0,
  addBalance(balance:number): string {
    return `My New balance is ${this.balance + balance}`
  }
}
// User.addBalance(10)

const arr : number[] = [2,4,5,6]

const newArray : number[] = arr.map((element:number): number => element * element)
}