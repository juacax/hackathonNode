import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index.routes.js';

dotenv.config();
const { HTTP_PORT } = process.env;
const app = express();

app.use(router);

app.listen(HTTP_PORT, () =>{
    console.log(`Server running on http://localhost:${HTTP_PORT}`)
})