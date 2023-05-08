'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4*a*c;
  if (discriminant === 0) {
    arr.push(- b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } 
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if(Number.isNaN(Number(percent)) || typeof percent === "undefined") {
    return "Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent + "\"";
  }
  if(Number.isNaN(Number(contribution)) || typeof contribution === "undefined") {
    return "Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution + "\"";
    }
  if(Number.isNaN(Number(amount)) || typeof amount === "undefined") {
    return "Параметр \"Общая стоимость\" содержит неправильное значение \"" + amount + "\"";
  }
  let creditBody = amount - contribution;
  let today = new Date();
  let months = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
  let partOfTheInterestRate = percent / 12 / 100;
  let payment = creditBody * (partOfTheInterestRate + partOfTheInterestRate / ((Math.pow((1 + partOfTheInterestRate), months)) - 1));
  let totalAmount = Number((payment * months).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}