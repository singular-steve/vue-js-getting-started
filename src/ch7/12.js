// Set
let s1 = new Set()
s1.add('apple')
s1.add('dog')
s1.add('apple')
s1.add('cat')
console.log(s1)

let f1 = new Set(['apple', 'banana', 'grape'])
let f2 = new Set(['no', 'one', 'grape'])

let union = new Set([...f1.values()], [...f2.values()])
let intersection = new Set([...f1.values()].filter(item => f2.has(item)))
let diff = new Set([... f1.values()].filter(item => !f2.has(item)))

console.log(union)
console.log(intersection)
console.log(diff)