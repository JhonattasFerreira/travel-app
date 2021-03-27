import './style/base.scss';
import './style/form.scss';
import './style/content.scss';

import './js/formHandler';
import {isValidInputs, checkDateForecast} from './js/util';
import {updateBasicInformationUi, updateForecastUi, updateImageUi, updateCountryInformation, cleanUi, setErrorMessage} from './js/uiElements';


console.log('hello World');

export {isValidInputs, checkDateForecast, updateBasicInformationUi, updateForecastUi, updateImageUi, updateCountryInformation, cleanUi, setErrorMessage};