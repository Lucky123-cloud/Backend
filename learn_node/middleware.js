import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log('<h1>Helloo</h1>');
    next();
})

app.get('/', (req, res) => {
    res.send('testest')
});

app.listen(5000);