const axios = require('axios'); // Import axios
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const getCoordinates = require('./geonames');
const getWeather = require('./weatherbit');
const getImage = require('./pixabay');
const getFlights = require('./amadeus');
require('dotenv').config();

const app = express();

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());
app.use(bodyParser.json());

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/views', 'index.html'));
});

// Endpoint to get coordinates based on location
app.post('/coordinates', async (req, res) => {
  const { location } = req.body;
  try {
    const coordinates = await getCoordinates(location);
    res.json(coordinates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get coordinates' });
  }
});

// Endpoint to get weather data based on coordinates and date
app.post('/weather', async (req, res) => {
  const { lat, lng, date } = req.body;
  try {
    const weather = await getWeather(lat, lng, date);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get weather data' });
  }
});

// Endpoint to get an image URL based on location
app.post('/image', async (req, res) => {
  const { location } = req.body;
  try {
    const imageUrl = await getImage(location);
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get image' });
  }
});

// Endpoint to get flight data based on origin, destination, and dates
app.post('/flights', async (req, res) => {
  const { origin, destination, departDate, returnDate } = req.body;
  try {
    const flightsData = await getFlights(origin, destination, departDate, returnDate);
    res.json(flightsData);
  } catch (error) {
    console.error('Error getting flight data:', error.message);
    res.status(500).json({ error: 'Error getting flight data', details: error.message });
  }
});

// Endpoint to serve the airports JSON file
app.get('/airports', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/assets','airports.json'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
module.exports = app; // Export the app instance
