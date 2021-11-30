const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cripto')
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));