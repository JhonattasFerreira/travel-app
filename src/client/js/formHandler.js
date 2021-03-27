const cityElement = document.getElementById('city');
const dateElement = document.getElementById('date');
const buttonElement = document.getElementById('travel');
const errorMessageElement = document.getElementById('error-message');

const [today] = new Date().toISOString().split('T');
dateElement.setAttribute('min', today);

buttonElement.addEventListener('click', (event) => {
  event.preventDefault();

  const inputsValidated = Client.isValidInputs(cityElement.value, dateElement.value);

  if(inputsValidated.isValid){
    console.log('passed')
  } else {
    errorMessageElement.innerHTML = inputsValidated.messageError;
  }
})
