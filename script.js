'use strict';

//all data types return true except number.

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    accumulatedMonth, 
    start = function(){

       do{
          money = prompt("Ваш месячный доход?");
       }
       while ( !isNumber(money));
        };


     start();


let appData = {
  icome: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 300000,
  period: 3,
  asking: function(){    
     let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
         appData.addExpenses = addExpenses.toLowerCase().split(", ");
         appData.deposit = confirm("Есть ли у вас депозит в банке?");

         for( let i = 0; i<2; i++){
             let title = prompt("Введите обязательную статью расходов?");

            do{
                 appData.expenses[title] = prompt("Во сколько это обойдется?");

             } while (!isNumber(appData.expenses[title]));

         }

  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function(){
    for (let key in appData.expenses) {
     appData.expensesMonth += +appData.expenses[key];
     }
  },
  getBudget: function(){
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay =  Math.ceil(appData.budgetMonth/30);
  },

  getTargetMonth: function(){
    appData.period = Math.floor(appData.mission / appData.budgetMonth) ;
    if (appData.period >= 0) {
        console.log(`Ваша цель будет достигнута за : ` + appData.period + ` мес.`);
    } else {
        console.log("Ваша цель не будет достигнута");
    }
  },
  getStatusIncome: function(){
    if (appData.budgetDay >= 1200) {
        console.log("У вас высокий уровень дохода 🤑");
    } else if ( appData.budgetDay >= 600 && appData.budgetDay < 1200){
        console.log("У вас средний уровень дохода 😉");
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 600 ){
        console.log("К сожалению у вас уровень дохода ниже среднего 😪");
    } else {
        console.log("Что то пошло не так 🧐");
    }
},

};     

appData.asking();

appData.getExpensesMonth();


console.log("Сумма всех обязательных расходов за месяц: " + appData.expensesMonth  + " y.e.");

appData.getBudget();

let getTargetMonth = appData.getTargetMonth();


let getStatusIncome = appData.getStatusIncome();


console.log(appData);

for(let key in appData){
    console.log(`Наша программа включает в себя данные: ` + key + ` , значение данных: ` + appData[key]);
}




