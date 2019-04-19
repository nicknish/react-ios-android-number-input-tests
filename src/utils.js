export const floatSanitizer = val => {
  if (!val) return val;
  const nonDigitOrDecimalReg = /[^\d\.]/g;
  return val
    .replace(nonDigitOrDecimalReg, "")
    .replace(/(?!^)-/g, "")
    .replace(/[\,]/g, "");
};

export const dollarFormatter = value => {
  if (!value && value !== 0) {
    return value;
  }
  const formatter = new Intl.NumberFormat("en-US");
  return `$` + formatter.format(value);
};
