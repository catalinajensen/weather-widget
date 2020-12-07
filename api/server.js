const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express(),
	bodyParser = require('body-parser');
port = 3080;

const APIKey = '166d00e26d3ff2c6149e89feccc5c59a';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/city', (req, res) => {
	const query = req.query.newCity || '';
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${APIKey}`;

	fetch(url)
		.then(result => result.json())
		.then(jsonMessage => res.json({ city: jsonMessage }));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on the port::${port}`);
});
