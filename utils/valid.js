import { loginLocales, validLocales } from "../i18n/locales";

export const isValidEmail = (email, locale = 0) => {
  if (!email || email.trim().length === 0) {
    return {
      isValid: false,
      message: `*  ${loginLocales[locale].email.errorMessage1}!`,
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: `*  ${loginLocales[locale].email.errorMessage2}!`,
    };
  }

  return { isValid: true };
};

export const isValidNumber = (number, locale = 0) => {
  if (!number || number.trim().length === 0) {
    return {
      isValid: false,
      message: `*  ${loginLocales[locale].number.errorMessage1}!`,
    };
  }
  const mongolianPhoneNumberRegex =
    /^(85|94|95|99|90|91|96|80|86|88|89|83|93|97|98)\d{6}$/;
  if (!mongolianPhoneNumberRegex.test(number)) {
    return {
      isValid: false,
      message: `*  ${loginLocales[locale].number.errorMessage2}!`,
    };
  }

  return { isValid: true };
};

export const isValidZip = (zip, locale = 0) => {
  if (!zip || zip.trim().length === 0) {
    return {
      isValid: false,
      message: `*  ${validLocales[locale].zip.errorMessage1}!`,
    };
  }
  const zipRegex = /^\d{5,6}$/;
  if (!zipRegex.test(zip)) {
    return {
      isValid: false,
      message: `*  ${validLocales[locale].zip.errorMessage2}!`,
    };
  }
  return { isValid: true };
};

export const isValidSms = (message) => {
  const regex = /^[a-zA-Z0-9\s\p{P}\p{S}]*$/u;
  if (message.length > 160) {
    return { isValid: false, message: `* 160 Тэмдэгтэд багтаана уу!` };
  }
  if (!regex.test(message)) {
    return {
      isValid: false,
      message: `* Зөвхөн латин үсэг!`,
    };
  }
  return {
    isValid: true,
  };
};

export const areEqualObjects = (a, b) =>
  JSON.stringify(Object.entries(a).sort()) ===
  JSON.stringify(Object.entries(b).sort());
