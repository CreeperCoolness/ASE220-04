const events = require('events');
const fs=require('node:fs')
const prompt=require('prompt-sync')({sigint:true})
const readline = require('readline');

const lol="e,t";
let email= prompt('Enter email: ');
let passwords= prompt('Enter password: ');
let found=false;
(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('credentials.csv'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      if (line.includes(email)&&line.includes(passwords)) {
		console.log(`Login Successful: ${line}`);
		let found=true;
	  }
    });

    rl.on('close', () => {
      if (found==false) {
		console.log(`Invalid email or password.`);
	  }
    });

  } catch (err) {
    console.error(err);
  }
})();