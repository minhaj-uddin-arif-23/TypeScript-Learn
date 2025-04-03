// * ternary operator

const age :number = 18

const isAdult = age >= 18 ? "Adult" : "Not Adult"

// console.log({isAdult})

// * nullish coalisence operator

const isAuthenticated = undefined

const result1 = isAuthenticated ?? "Guest"
 
const  result2 = isAuthenticated ? isAuthenticated : 'Guest'

console.log({result1},{result2})

// uses of '........  ? ............'
//  -> ternary -> optional Chaning -> nullishe coalisence