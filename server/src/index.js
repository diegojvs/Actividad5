const express = require('express');
const { json } = require('express');
const app = express();
require('./database');

//const morgan = require('morgan');
app.set('json spaces', 2);

//app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./rutas/index'));
app.use(require('./rutas/pdf'));
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('Corriendo en', app.get('port'));
});