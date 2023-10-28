const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('webserver started');
    res.send('hello from express');
})

app.listen(2000);