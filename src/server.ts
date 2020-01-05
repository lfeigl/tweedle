import express from 'express';
import bodyParser from 'body-parser';
import logger from './middlewares/logger';

const server = express();

server.use(bodyParser.json());
server.use(logger);

server.get('/', (req: express.Request, res: express.Response) => {
  res.send('Tweedle - Open API for downloading all media of a Twitter profile.');
});

export default server;
