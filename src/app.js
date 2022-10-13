import express from 'express';
import router from './routes/task.routes';
import cors from 'cors'
import morgan from 'morgan';
import { options } from './swaggerOptions';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const specs = swaggerJSDoc(options);

// App
const app = express();

// MiddleWare 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router)

// Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));


export default app;