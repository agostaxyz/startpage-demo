import mongoose from 'mongoose';
import express from 'express';

const app = express();

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@startpagecluster0.c2gv8zy.mongodb.net/`
).then(() => {
    app.listen(3000)
    console.log('Connected')
}).catch((err) => console.log(err))