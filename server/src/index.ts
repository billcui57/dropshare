import { RatingModel } from '@/models'
import mongoose from 'mongoose';

const express = require("express");
const app = express();
const port = 5000;


mongoose.connect('mongodb://localhost:27017/dropshare', { useNewUrlParser: true, useUnifiedTopology: true });


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
