const arr = [1,2,3,4,5,6,7,8]

arr.push(20)

arr.push(`mango`)

console.log(...arr)

const pop = arr.pop()

console.log(...arr)

console.log(`this is the popped el ${pop}`)

let shift = arr.shift()

console.log(`This is the Shifted El ${shift}`)
console.log(...arr)

arr.unshift(11)
console.log(...arr)


let arr_length = arr.unshift(11)
console.log(...arr)