var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render('login',{});
});

app.get('/signup',function(req,res){
	res.render('signup',{});
});

app.post('/profile',function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	var type = req.body.type;
	console.log(email);
	console.log(password);
	console.log(type);
});

app.listen('8080', function(err){
	if(err){
		throw err;
	}
	console.log("Server run on port 8080");
});