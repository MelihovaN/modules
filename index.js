// const color = require("colors");

// console.log(color.bgWhite("Colored results"));

const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; /*на данный момент у нас присвоены значения для a и b, 
  и посчитанна сумма этих значений*/

  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; /* выполненно условие - если сумма > 50, то бонус равен 50. 
  Если это условие не выполняется (сумма< 50, то бонус будет равен сумме) */

  return bonus;
};

calculateBonus(60, 20);
