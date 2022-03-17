/* Реализуйте функцию подсчета конвертированной суммы*/
function convertation() {
  // Используйте коэффициэнты
  const EUR_TO_DOL = 0.9;
  const EUR_TO_RUB = 0.007;

  const DOL_TO_EUR = 1.05;
  const DOL_TO_RUB = 0.008;

  const RUB_TO_DOL = 116;
  const RUB_TO_EUR = 126;

  // В следующих переменных записываем что выбрал/ввел пользователь

  // конвертируемая сумма
  let summ = Number(currCount.value)

  // из какой валюты
  let fir_curr = String(selectFirCurrency.value);

  // в какую валюту
  let sec_curr = selectSecCurrency.value;

  let result;

  let curs = fir_curr + sec_curr;

  console.log(curs);

  switch (curs) {
    case 'eurodollar':
      result = (summ / EUR_TO_DOL);
      break;
    case 'euroruble':
      result = (summ / EUR_TO_RUB);
      break;
    case 'dollareuro':
      result = (summ / DOL_TO_EUR);
      break;
    case 'dollarruble':
      result = (summ / DOL_TO_RUB);
      break;
    case 'rubleeuro':
      result = (summ / RUB_TO_EUR);
      break;
    case 'rubledollar':
      result = (summ / RUB_TO_DOL);
      break;
    default:
      result = 'Incorrect input';  
  }

  resCurr.innerHTML = result;
}