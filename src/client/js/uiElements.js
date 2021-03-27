//container
const [contentElement] = document.getElementsByClassName('content');
contentElement.style.display = 'none';

// basic information
const cityNameElement = document.getElementById('city-name');
const countryElement = document.getElementById('country');
const populationElement = document.getElementById('population');
const stateElement = document.getElementById('state');

// forecast
const forecastElement = document.getElementById('forecast');

// image
const imageCityElement = document.getElementById('img-city');
imageCityElement.style.display = 'none';

// country information
const languagesElement = document.getElementById('languages');
const currencyElement = document.getElementById('currency');

//error
const errorMessageElement = document.getElementById('error-message');

const updateBasicInformationUi = ({name, adminName1: stateName, countryName, population}) => {
  initializeUi();

  cityNameElement.innerText = `${name}`;
  stateElement.innerText = `State: ${stateName}`
  countryElement.innerText = `Country: ${countryName}`;
  populationElement.innerText = `Population: ${population}`;
}

const updateForecastUi = (temp) => {
  forecastElement.innerText = `The forecast is: ${temp}°C`;
}

const updateImageUi = ({webformatURL}) => {
  imageCityElement.setAttribute('src',webformatURL);
  imageCityElement.style.display = 'inline';
}

const updateCountryInformation = ({currencies, languages}) => {
  const currenciesNames = currencies.map((currency) => {
    return currency.name;
  });

  const languagesName = languages.map((language) => {
    return language.name
  })

  currencyElement.innerText = `Currencies: ${currenciesNames}`;
  languagesElement.innerText = `Languages: ${languagesName}`;
}

const cleanUi = () => {
  contentElement.style.display = 'none';

  cityNameElement.innerText = '';
  stateElement.innerText = '';
  countryElement.innerText = '';
  populationElement.innerText = '';

  forecastElement.innerText = '';
  imageCityElement.setAttribute('src','');

  currencyElement.innerText = '';
  languagesElement.innerText = '';

  errorMessageElement.innerHTML = '';
}

const setErrorMessage = (errorMessage) => {
  errorMessageElement.innerHTML = errorMessage;
}

const initializeUi = () => {
  contentElement.style.display = 'flex';
}

export {updateBasicInformationUi, updateForecastUi, updateImageUi, updateCountryInformation, cleanUi, setErrorMessage}