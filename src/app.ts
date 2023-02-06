import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mainRouter from './routes/main';
import { json } from 'body-parser';
import swaggerDoc from 'swagger-ui-express';
import swaggerDocumentation from './apiDocumentation/documentation';

const app = express();

app.use(json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/documentations', swaggerDoc.serve);
app.use('/api/documentations', swaggerDoc.setup(swaggerDocumentation));

app.use(mainRouter);

app.use((error: Error, req: Request, res: Response) => {
  const message = error.message;
  res.status(400).json(message);
});

app.listen(4000);
