import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') }); // RUTA RELATIVA DESDE dist
const app: Express = express();

const PORT = process.env.PORT || 3001;

app.get('/', (request: Request, response: Response) => {
  response.status(200).send('Hello World');
});

app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });
