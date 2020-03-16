// default parameter

function addContact(name, mobile, home='no home', address='no address', email='no email') {
  var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`
  console.log(str)
}

addContact('Steve', '010-1111-2222')
addContact('John', '010-3333-4444', '02-1111-9999', 'Seoul')