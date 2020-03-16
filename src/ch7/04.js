// 가변 파라미터

function foodReport(name, age, ...favoriteFoods) {
  console.log(name + ', ' + age)
  console.log(favoriteFoods)
}

foodReport('Steve', 100, 'Apple', 'Banana', 'Peach')
foodReport('Jack', 50, 'Water')