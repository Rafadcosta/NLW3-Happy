import express from 'express';

const app = express();

app.get('/oi', (req, res) => {
    return res.json({message: 'Hello Worlde'});
});

app.listen(3333);