const CITY_VALID_REGEX = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

const isValidInputs = (inputCity, inputDate) => {
  const inputValuesValidated = {
    isValid: false,
    messageError: 'Error',
  }
  
  if(!inputCity || !inputDate) {
    inputValuesValidated.messageError = 'You must enter the city and date';
    return inputValuesValidated;
  }

  else if (!CITY_VALID_REGEX.test(inputCity)) {
    inputValuesValidated.messageError = 'The city is incorrect'
    return inputValuesValidated;
  }

  const errorMessage = checkDate(inputDate);

  if(errorMessage) {
    inputValuesValidated.messageError = errorMessage;
    return inputValuesValidated;
  }

  inputValuesValidated.isValid = true;
  inputValuesValidated.messageError = '';

  return inputValuesValidated;
}

const checkDate = (date) => {
  let messageErrorDate;

  const today = new Date();
  today.setHours(0,0,0,0);

  const [year,month,day] = date.split('-')
  const dateValue = new Date(year,month-1,day);

  if(dateValue < today) {
    messageErrorDate = 'The date must be greater than the current date';
    return messageErrorDate;
  }

  const limitDateFuture = today;
  limitDateFuture.setDate(limitDateFuture.getDate() + 15);

  if(dateValue > limitDateFuture) {
    messageErrorDate = 'The date must be up to a maximum of 16 days'
    return messageErrorDate;
  }

  return messageErrorDate
}

const checkDateForecast = (date) => {
  let isCurrentForecast = true;

  const sevenDaysFuture = new Date();
  sevenDaysFuture.setHours(0,0,0,0);
  sevenDaysFuture.setDate(sevenDaysFuture.getDate() + 6);

  const [year,month,day] = date.split('-')
  const dateValue = new Date(year,month-1,day);

  if(dateValue > sevenDaysFuture) {
    isCurrentForecast = false;
  }

  return isCurrentForecast
}

export {isValidInputs, checkDateForecast};