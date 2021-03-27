const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Listen in the port: ${port}`);
})

app.post('/postInformationCity', async(req, res) => {
  const {city} = req.body;
  
  const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.API_KEY_GEONAMES}`);
  const data = await response.json();
  res.send(data);
});

app.post('/postCurrentForecast', async(req, res) => {
  const {lat,lng} = req.body;
  
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lng}&key=${process.env.API_KEY_WEATHERBIT}`);
  const data = await response.json();
  res.send(data);
});

app.post('/postForecast', async(req, res) => {
  const {lat,lng} = req.body;
  
  const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.API_KEY_WEATHERBIT}`);
  const data = await response.json();
  res.send(data);
});

app.post('/postImageCity', async(req, res) => {
  let dataResponse;
  const {city, country} = req.body;
  
  const responseCity = await fetch(`https://pixabay.com/api/?key=${process.env.API_KEY_PIXABAY}&q=${city}`);
  dataResponse = await responseCity.json();

  if(dataResponse.total === 0) {
    const responseCountry = await fetch(`https://pixabay.com/api/?key=${process.env.API_KEY_PIXABAY}&q=${country}`);
    dataResponse = await responseCountry.json();
  }

  res.send(dataResponse);
});

app.post('/postCountryInformation', async(req, res) => {
  const {countryCode} = req.body;
  
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
  const data = await response.json();
  res.send(data);
});

app.get('/testCity', async (req, res) => {
  res.json({city: 'Colorado'})
});

module.exports = app;