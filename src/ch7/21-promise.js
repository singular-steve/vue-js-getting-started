// Promise
// resolve => then
// reject => catch

let p = new Promise((resolve, reject) => {
  setTimeout(function() {
    let num = Math.round(Math.random() * 20)
    let isOdd = num % 2
    if (isOdd) {
      resolve(num)
    } else {
      reject(num)
    }
  }, 2000)
})

p.then(num => {
  console.log('Odd Number : ', num)
}).catch(num => {
  console.log('Even Number : ', num)
})

console.log('Random number is odd or even?')
