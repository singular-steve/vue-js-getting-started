let msg = 'global';
function outer(a) {
  let msg = 'outer'
  console.log(msg)
  if (true) {
    let msg = 'block'
    console.log(msg)
  }
}
