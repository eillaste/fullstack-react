// in ES6 - no node support
// import express from 'express';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there x' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);