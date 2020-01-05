import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Tweedle - Open API for downloading all media of a Twitter profile.');
});

export default router;
