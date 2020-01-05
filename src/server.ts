import express from 'express';
import bodyParser from 'body-parser';
import logger from './middlewares/logger';
import router from './routes';

const server = express();

server.use(bodyParser.json());
server.use(logger);
server.use('/', router);

export default server;
