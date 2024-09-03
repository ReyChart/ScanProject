export const validateInnNumber = (inn: string | number): boolean => {
  let result = false;
  if (typeof inn === 'number') {
    inn = inn.toString();
  } else if (typeof inn !== 'string') {
    inn = '';
  } else {
    const checkDigit = (inn: string, coefficients: number[]): number => {
      let n = 0;
      for (let i = 0; i < coefficients.length; i++) {
        n += coefficients[i] * parseInt(inn[i]);
      }
      return (n % 11) % 10;
    };

    const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
    if (n10 === parseInt(inn[9])) {
      result = true;
    }
  }
  return result;
};

export const isPhoneNumber = (input: string) => {
  const trimmedInput = input.trim().replace(/ /g, '');
  return /^\d*$/.test(trimmedInput) || /^(\+7)/.test(trimmedInput);
};

export const formatPhoneNumber = (input: string) => {
  const trimmedInput = input.trim().replace(/(?!^\+)\D/g, '');

  const mainNumber = trimmedInput.slice(0, 12);
  const additionalDigits = trimmedInput.slice(12);

  let formattedNumber = '';

  if (mainNumber.length <= 2) {
    formattedNumber = mainNumber;
  } else if (mainNumber.length <= 5) {
    formattedNumber = `${mainNumber.slice(0, 2)} ${mainNumber.slice(2)}`;
  } else if (mainNumber.length <= 8) {
    formattedNumber = `${mainNumber.slice(0, 2)} ${mainNumber.slice(2, 5)} ${mainNumber.slice(5)}`;
  } else if (mainNumber.length <= 10) {
    formattedNumber = `${mainNumber.slice(0, 2)} ${mainNumber.slice(2, 5)} ${mainNumber.slice(
      5,
      8
    )} ${mainNumber.slice(8)}`;
  } else {
    formattedNumber = `${mainNumber.slice(0, 2)} ${mainNumber.slice(2, 5)} ${mainNumber.slice(
      5,
      8
    )} ${mainNumber.slice(8, 10)} ${mainNumber.slice(10, 12)}`;
  }

  return formattedNumber + additionalDigits;
};

export const isValidPhoneNumber = (input: string) => {
  const trimmedInput = input.trim().replace(/(?!^\+)\D/g, '');
  return trimmedInput.match(/(^8|7|\+7)(\d{10})/);
};
