// arrow function 에서의 this는 해당 함수가 정의된 context에서의 this를 따른다
function Person(name, yearCount) {
  this.name = name
  this.age = 0
  let increaseAge = () => {
    this.age++
  }
  for (let i = 1; i <= yearCount; i++) {
    increaseAge() // working
  }
}

let p1 = new Person('Steve', 50)
console.log(p1.name + ' : ', p1.age)