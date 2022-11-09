const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');

app.listen(3000, ()=>{
    console.log('Servidor Levantadoo');
    });

app.use(express.static(path.join('public')));

app.use(mainRouter);