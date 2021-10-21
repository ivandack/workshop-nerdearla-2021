const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

const tasks = require('./src/routes');
const connection = require('./src/db');

const server = process.env.DB_SERVER || 'localhost:27017';
const db = process.env.DB_NAME || 'todo';

connection(server, db);

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/tasks', tasks);
app.get('/health', (req, res) => res.sendStatus(200));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
