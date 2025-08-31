import express from 'express';
import cors from 'cors';
import { corsOptions } from './config/middleware/cors.config';

const app = express();

// Middleware
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Server is running');
});

export default app;
