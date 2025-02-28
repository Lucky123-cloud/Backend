import express from 'express'

const app = express();

app.get('/', (req, res) =>{
    //common req(s) that we have:
    //req.query
    //req.body
    //req.params
    console.log(req.query)
    //once you run the server on port 3000, add the following
    //
    res.send("Getting the root");
})

app.get('/profile', (req, res) =>{
    res.send("Getting the root...")
})

app.listen(3000)