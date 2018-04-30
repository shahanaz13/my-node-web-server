const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

//app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getYear', (foot) => {
    return foot.toUpperCase();
});
app.get('/', (req, res) => {
    res.send('<h1>Hello express</h1>');
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        footer: 'iam footer',
        foot: 'checking footer'
    });
});
app.listen(3000);
