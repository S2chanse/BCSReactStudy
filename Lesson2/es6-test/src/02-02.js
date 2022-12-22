let msg = 'Global';

function outer() {
  let msg = 'Outer';
  console.log(msg);
  if (true) {
    let msg = 'Block';
    console.log(msg);
  }
}
