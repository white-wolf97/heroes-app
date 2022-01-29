const express = require('express');
const apiV1Router = require('./routers/apiv1');

const app = express();

app.use('/api/v1/', apiV1Router);

app.listen(3000, () => { console.log('listening on port 3000'); })