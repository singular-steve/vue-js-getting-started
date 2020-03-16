// arrow function : this
// 호출하는 context 를 넘어서 this를 연결하려면 bind, apply, call 등의 함수 수준의 메서드를 사용한다.
function Person(name, yearCount) {
  this.name = name
  this.age = 0
  let increaseAge = function() {
    this.age++
  }
  for (let i = 1; i <= yearCount; i++) {
    // increaseAge() // not working
    increaseAge.apply(this)
  }
}

let p1 = new Person('Steve', 50)
console.log(p1.name + ' : ', p1.age)