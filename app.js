var express = require ('express');
var app = express();
var path = require('path');
var router = express.Router();

// viewed at http://localhost:8080
router.get('/', function(req,res){
  res.sendFile(path.join( __dirname + '/signin.html'));
});

router.get('/student', function(req,res){
  res.sendFile(path.join( __dirname + '/student.html'));
});

router.get('/signup', function(req,res){
	res.sendFile(path.join( __dirname + '/signup.html'));
});

router.get('/teacher',function(req,res){
	res.sendFile(path.join( __dirname + '/teacher.html'))
});

app.use('/', router);
console.log("Server started on port 8080");
app.listen(8080);
