export const floatSanitizer = val => {
  if (!val) return val;
  const nonDigitOrDecimalReg = /[^\d\.]/g;
  return val
    .replace(nonDigitOrDecimalReg, "")
    .replace(/(?!^)-/g, "")
    .replace(/[,]/g, "");
};

export const dollarFormatter = (val, currencySymbol) => {
  if (!val && val !== 0) {
    return val;
  }

  const formatter = new Intl.NumberFormat("en-US");
  const numberParts = val.toString().split(".");
  const wholeNumber = formatter.format(parseFloat(numberParts[0]));
  const hundredthsNumber = numberParts[1];
  const decimalString =
    hundredthsNumber === ""
      ? "."
      : hundredthsNumber
      ? `.${hundredthsNumber}`
      : "";

  // iOS Bug: Must not use a template string here
  // https://bugs.webkit.org/show_bug.cgi?id=190756
  const numberVal = `${wholeNumber}${decimalString}`;
  return currencySymbol + numberVal;
};
