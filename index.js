import express from 'express'
import api_route from './routes/route.js';
import 'dotenv/config'
import { dbConnection } from './config/db.js';
import mongoose from "mongoose";



// creating express app
const policeApp = express();
policeApp.use(express.json());


//calling the dbConnection fnc
dbConnection()


policeApp.use(api_route)


//listening to app

// policeApp.get('/', (req, res) => {
//   res.get('Welcome to police App')
// })




policeApp.listen(8000, () => {
  console.log('app is listening to port 8000')
});

