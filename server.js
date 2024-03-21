const http = require('node:http');
const fs = require('node:fs');

const server=http.createServer((req,res)=>{
	console.log(req.url)
	console.log(req.method)
	if(req.url.includes('/signup')){
		res.write(fs.readFileSync('./html/signup.html','utf8'))
		
	}else{
		if(req.url.includes('/signin')){
		res.write(fs.readFileSync('./html/signin.html','utf8'))
		res.write('Hello World!');
		}else{
			if(req.url.includes('/api')){
				res.setHeader('Content-Type', 'application/json');
				if(req.method=='POST'){
					 let body = ''
						req.on('data', function(data) {
						  body += data
						  console.log('Partial body: ' + body)
						})
						req.on('end', function() {
						  res.write(body);
						})
					}
				
			}else res.write(fs.readFileSync('./html/404.html','utf8'))
		}
	}
	res.write(req.method)
	res.end()
});

server.listen(5184);