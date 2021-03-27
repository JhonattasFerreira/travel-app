let country = '';
let countryCod = '';
let cityName = '';

//form elements
const cityElement = document.getElementById('city');
const dateElement = document.getElementById('date');
const buttonElement = document.getElementById('travel');

const [today] = new Date().toISOString().split('T');
dateElement.setAttribute('min', today);

buttonElement.addEventListener('click', (event) => {
  event.preventDefault();
  resetAttributes();
  Client.cleanUi();

  const inputsValidated = Client.isValidInputs(cityElement.value, dateElement.value);

  if(inputsValidated.isValid){
    console.log('passed')

    getInformationCity(cityElement.value)
    .then(data => getForecast(data, dateElement.value))
    .then(() => getCountryInformation(countryCod))
    .then(() => getImageCity(cityName, country))
    .catch((error) => {
      Client.setErrorMessage(error);
    });

  } else {
    Client.setErrorMessage(inputsValidated.messageError)
  }
})

const getInformationCity = async(city) => {
  const response = await fetch('http://localhost:3030/postInformationCity',{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({city})
  })
  
  try {
    const data = await response.json();
    console.log(data);

    if(data.geonames.length === 0) {
      throw new Error('The city is incorrect');
    }

    const [geonames] = data.geonames;

    const {lat, lng, countryName, countryCode, name} = geonames;

    country = countryName;
    countryCod = countryCode;
    cityName = name;

    Client. updateBasicInformationUi(geonames);

    return {lat,lng};
  } catch (error) {
    Client.setErrorMessage(error)
    return error;
  }
}

const getForecast = async({lat,lng}, dateValue) => {
  const forecastUrl = Client.checkDateForecast(dateValue) ? 'postCurrentForecast' : 'postForecast' ;

  const response = await fetch(`http://localhost:3030/${forecastUrl}`,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({lat,lng})
  });

  try {
    let temp;
    const dataResponse = await response.json();
    console.log(dataResponse);

    if(dataResponse.error) {
      throw new Error(dataResponse.error);
    }

    if(dataResponse.count === 1) {
      temp = dataResponse.data[0].temp;
    } else {
      const [dayWeather] = dataResponse.data.filter((item) => {
        const [date] = item.datetime.split(':');
        return date === dateValue;
      });

      temp = dayWeather.temp
    }

    Client.updateForecastUi(temp);
  } catch (error) {
    console.log(error)
    return error;
  }
}

const getImageCity = async(city, country) => {
  const response = await fetch('http://localhost:3030/postImageCity',{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({city, country})
  });

  try {
    const data = await response.json();
    console.log('image', data);

    if(cityName) {
      Client.updateImageUi(data.hits[0])
    } else {
      throw new Error('No image');
    }
  } catch (error) {
    console.log(error)
    return error;
  }
}

const getCountryInformation = async(countryCode) => {
  const response = await fetch('http://localhost:3030/postCountryInformation',{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({countryCode})
  });

  try {
    const data = await response.json();
    console.log(data);

    if(data.status === 400) {
      throw new Error(data.message);
    }

    Client.updateCountryInformation(data);
  } catch (error) {
    console.log(error)
    return error;
  }
}

const resetAttributes = () => {
  country = '';
  countryCod = '';
  cityName = '';
}