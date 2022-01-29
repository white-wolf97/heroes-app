const express = require('express');
const apiV1Router = require('./routers/apiv1');
const cors = require('cors');
const database = require('./database/database');
const DatabaseError = require('./exceptions/databaseError');
const config = require('./config')

const app = express();

app.use(cors());
app.use('/api/v1/', apiV1Router);

try {

	database.init();
} catch (err) {
	if (err instanceof DatabaseError) {

		console.log('Error creating the database, the app will shut down!');
	}
	else {
		console.log(err);
	}
	return;
}

app.listen(config.port, () => { console.log(`listening on port ${config.port}`); })