// 객체 속성과 변수명 동일할 경우 생략 가능

const name = 'Steve'
const age = 100
const email = 'aaa@aaa.com'

const obj = {name: name, age: age, email: email}
const obj2 = {name, age, email}

console.log(obj)
console.log(obj2)