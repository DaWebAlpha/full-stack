import express from 'express';
import dotenv from 'dotenv';
import connectDB  from './config/db.js';
import { notFound } from './middleware/notFound.js';
import { handleError } from './middleware/handleError.js';


dotenv.config()


const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.get('/home', (req, res)=>{
    res.send("Home Page");
})


app.get('/', (req, res)=>{
    res.send("Another Home")
})
app.use(notFound);
app.use(handleError)

app.listen(PORT, ()=>{
    console.log("Listening on PORT " + PORT)
})
