const express = require ("express");

const app = express();

const port = 3000;

const bodyParser = require ('body-parser');

const Redis = require ('redis');

const redisClient = Redis.createClient({url:"redis://localhost:6379"});



const {v4: uuidv4} = require('uuid'); // universely unique identifier


app.use(bodyParser.json()); //This looks for incoming data

app.get("/", (req, res) => {
    res.send("Hello Raphael!");
});

app.post('/login', (req, res) => {
    const loginUser = req.body.userName;
    const loginPassword = req.body.password; // Access the password data in the body
    console.log('Login username: '+loginUser);
    if (loginUser=="zimboganyo@yahoo.com" && loginPassword=="nephi123456@LDS"){
        const loginToken = uuidv4();
        res.send(loginToken);

    // res.send("Hello");
    } else {
        res.status(401); // unauthorized
        res.send('Incorrect password for '+loginUser);
    }
});

app.listen(port, () => {
    redisClient.connect();
    console.log("listerning");
});