import express from 'express';
import dotenv from 'dotenv';
import './config/db.js'
import { notFound } from './middleware/notFound.js';
import { handleError } from './middleware/handleError.js';
import router from './routes/userRoutes.js';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/home', (req, res) => {
  res.send("Home Page");
});

app.get('/', (req, res) => {
  res.send("Another Home");
});

app.use('/api', router);

console.log("api is added")

app.use(notFound);    
app.use(handleError); 

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
