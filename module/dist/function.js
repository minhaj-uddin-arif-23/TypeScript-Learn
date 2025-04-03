{
    "use strict";
//  Normal Function
function addThreeSum(num1, num2, num3, num4) {
    return num1 + num2 + num3;
}
addThreeSum(2, 3, 4, 5);
//  Arrow Function
const sum = (num1, num2, num3, num4 = 15) => num1 + num2 + num3 + num4;
//  object --> function --> method
const User = {
    name: 'Arif',
    balance: 0,
    addBalance(balance) {
        return `My New balance is ${this.balance + balance}`;
    }
};
// User.addBalance(10)
const arr = [2, 4, 5, 6];
const newArray = arr.map((element) => element * element);

}