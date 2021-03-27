import './style/base.scss';
import './style/form.scss';
import './style/content.scss';

import {addDateLimitOnInputDate} from './js/app';
import {isValidInputs, checkDateForecast} from './js/util';
import {updateBasicInformationUi, 
        updateForecastUi, 
        updateImageUi, 
        updateCountryInformation, 
        cleanUi, 
        setErrorMessage} from './js/uiElements';

addDateLimitOnInputDate();

export {isValidInputs, 
        checkDateForecast, 
        updateBasicInformationUi, 
        updateForecastUi, 
        updateImageUi, 
        updateCountryInformation, 
        cleanUi, 
        setErrorMessage,
        addDateLimitOnInputDate};