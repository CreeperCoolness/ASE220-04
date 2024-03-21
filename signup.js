const fs=require('node:fs')
const prompt=require('prompt-sync')({sigint:true})

while(true){
	let email= prompt('Enter email: ');
	if(email.length==0){
		console.log("Email cannot be empty.");
		email= prompt('Enter email: ');
	}
	
	let passwords= prompt('Enter password: ');
	if(passwords.length==0){
		console.log("Password cannot be empty.");
		passwords= prompt('Enter password: ');
	}
	fs.appendFileSync('./credentials.csv',email+','+passwords+'\n');
	console.log("\nFile Contents of file after append:", fs.readFileSync("credentials.csv", "utf8"));
}