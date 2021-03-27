import { isValidInputs, checkDateForecast } from './../util';

describe('util', () => {
  test('should validate the inputs', () => {
    const dateFormated = new Date();

    const validatedInput = isValidInputs('vancouver', `${dateFormated.getFullYear()}-${dateFormated.getMonth() + 1}-${dateFormated.getDate()}`);

    expect(validatedInput.isValid).toBe(true);
  });
});
