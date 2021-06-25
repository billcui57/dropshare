import { RatingModel } from "@/models";
import Routes from '@/routes'
import mongoose from "mongoose";
import express from 'express'

const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/dropshare", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use('/api/v1', Routes.initPrivateRoutes())


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
