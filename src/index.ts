#!/usr/bin/env node

import server from './server';

const port = 3000;

server.listen(port);
console.log(`[Tweedle] Listening on port ${port}.`);
