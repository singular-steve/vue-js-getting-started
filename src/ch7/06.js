// destructuring
function addContact({name, phone, email='no email', age=0}) {
  console.log('name = ', name)
  console.log('phone = ', phone)
  console.log('email = ', email)
  console.log('age = ', age)
}

addContact({
  name: 'Steve',
  phone: '123-4567-0092'
})