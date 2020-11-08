import 'dotenv/config'

import express from 'express';
import mongoose from 'mongoose';
import routes from './router';



const app = express();

//Para que possamos pegar o corpo da requisicao => req.body

app.use(express.json());


mongoose.connect(process.env.KEY_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use(routes);

app.listen(3333);
console.log('Server is running at http://localhost:3333');