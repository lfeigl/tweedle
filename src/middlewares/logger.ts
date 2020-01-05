/* eslint no-console: 0 */

import express from 'express';

/**
 * Middleware for logging.
 *
 * @param req - Express request
 * @param res - Express response
 * @param next - Express next function
 */
function logger(req: express.Request, res: express.Response, next: express.NextFunction): void {
  console.log(`[Tweedle] ${req.method} ${req.path}`);
  next();
}

export default logger;
