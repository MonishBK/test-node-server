const express = require("express");
const app = express();


// dotenv.config({path:"./config.env"}); 
const PORT = process.env.PORT || 3000 ;

// to read json file we use this middle ware
app.use(express.json());


app.get('/api/', (req, res) =>{
    res.send("Hey!! server");
});

app.get('/api/about', (req, res) =>{
    res.send("Hey!! About");
});
app.get('/api/contact', (req, res) =>{
    res.send("Hey!! Contact");
});

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})