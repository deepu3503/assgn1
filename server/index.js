const express = require('express');
const path = require('path');
const app = express();
var port = process.env.PORT || 3000;

//for views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/image'));

//Index
app.get('/', function(req, res){
    res.render('index', {
        title:''
    });
});

//Home
app.get('/index', function(req, res){
    res.render('index', {
        title:''
    });
});

//About Me

app.get('/aboutme', function(req, res){
    res.render('aboutme', {
        title:'About Me'
    });
});

//Projects

app.get('/projects', function(req, res){
    res.render('projects', {
        title:'My Work'
    });
});

//Services

app.get('/services', function(req, res){
    res.render('services', {
        title:'Services'
    });
});

//Contact

app.get('/contact', function(req, res){
    res.render('contact', {
        title:'Stay Connect'
    });
});

app.listen(port, () => console.log('Server is running on port'+port));
