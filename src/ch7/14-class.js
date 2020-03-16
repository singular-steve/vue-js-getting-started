// class
class Person {
  constructor(name, tel, address) {
    this.name = name
    this.tel = tel
    this.address = address
    if (Person.count) {
      Person.count++
    } else {
      Person.count = 1
    }
  }
  static getPersonCount() {
    return Person.count
  }
  toString() {
    return `name=${this.name}, tel=${this.tel}, address=${this.address}`
  }
}

let p1 = new Person('Steve', '010-1111-2222', 'Seoul')
let p2 = new Person('Bravo', '777-1111-2222', 'Victory Land')

console.log(p1.toString())
console.log(Person.getPersonCount())

class Employee extends Person {
  constructor(name, tel, address, employeeId, department) {
    super(name, tel, address)
    this.employeeId = employeeId
    this.department = department
  }
  toString() {
    return super.toString() + `employeeId=${this.employeeId}, department=${this.department}`;
  }
  getEmployeeInfo() {
    return `employeeId : ${this.employeeId}, department : ${this.department}`
  }
}

let e1 = new Employee('Apple', '010-9999-8888', 'Seoul', 'A1234', 'Dev Team')
console.log(e1.getEmployeeInfo())
console.log(e1.toString())
console.log(Person.getPersonCount())