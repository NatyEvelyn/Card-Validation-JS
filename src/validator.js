const validator = {
  isValid(cardNumber) {
    const cardArray = [];
    for (let i = 0; i < cardNumber.length; i++) {
      const digit = parseInt(cardNumber[i]);
      cardArray.push(digit);
    }

    const cardNumReverse = cardArray.reverse();
    for (let i = 0; i < cardNumReverse.length; i++) {
      if ((i + 1) % 2 === 0) {
        cardNumReverse[i] = cardNumReverse[i] * 2;
      }
      if (cardNumReverse[i] >= 10) {
        cardNumReverse[i] = cardNumReverse[i] - 9;
      }
    }

    let sumTotal = 0;
    for (let i = 0; i < cardNumReverse.length; i++) {
      sumTotal = sumTotal + cardNumReverse[i];
    }
    if (sumTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(cardNumber) {
    let maskNum = [];

    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        maskNum.push("#");
      } else {
        maskNum.push(cardNumber[i]);
      }
    }
    const masked = maskNum.join("");
    return masked;
  },
};
export default validator;
