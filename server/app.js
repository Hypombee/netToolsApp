//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require ('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port no
const port = 9091;


//testing Server
app.get('/',(reg, res)=>{
	res.send('Net Tools In Development..');
});

app.listen(port,()=>{
	console.log('Server started at port:'+port);
});

