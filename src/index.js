import calc from './util/util'

let x = 5
let y = 10
let str = `<h2>${x} + ${y} = ${calc.add(x, y)}</h2>`

document.getElementById('app').innerHTML = str