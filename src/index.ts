import express from 'express';
import { json } from 'body-parser';

import { analyzerRouter } from './routes/analyze';

const port = process.env.PORT || 3000;

const app = express();
app.use(json());

app.use(analyzerRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
