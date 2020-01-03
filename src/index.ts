#!/usr/bin/env node
/* eslint no-console: 0 */

import server from './server';

const port = 3000;

server.listen(port);
console.log(`[Tweedle] Listening on port ${port}.`);
