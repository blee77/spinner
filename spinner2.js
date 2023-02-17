

let array = ['|', '/', '-' , '\\' , '|' , '/', '-','\n'];
let delay = 100;

for (let i = 0; i < array.length; i++) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${array[i]} `);
  } , delay);
}


