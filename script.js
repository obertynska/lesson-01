'use strict';

//all data types return true except number.

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let sumExpences = 0;
let promptResult = 0;
let promptResultArr = [];
 let nameExpens = [];

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

         for (let i = 0; i<2; i++) {
       
           nameExpens[i] = prompt("Введите обязательную статью расходов?");        

          do {
            promptResult = prompt("Во сколько это обойдется?");
          } while (!isNumber(promptResult) && promptResult !== null);
         

           promptResultArr.push(parseFloat(promptResult));
          
           appData["expenses"][nameExpens[i]] = promptResultArr[i];
         /*  sumExpences += parseFloat(promptResult);*/
         
        }
 
      /* return sumExpences;*/
       
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function(){

    for (let key in appData["expenses"]) {
     appData.expensesMonth += appData["expenses"][key]; 
     return appData.expensesMonth;

   };

 

  },
  getBudget: function(){
    return appData.budget - appData.expensesMonth;
  },

  getTargetMonth: function(){
    let result = Math.floor(appData.mission / accumulatedMonth) ;
    if (result >= 0) {
        console.log(`Ваша цель будет достигнута за : ` + result + ` мес.`);
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

appData.asking()



let expenses =[];

/*let expensesAmount = sumExpences;
console.log(expensesAmount);*/

console.log("Сумма всех обязательных расходов за месяц: " + appData.expensesMonth + " y.e.");


accumulatedMonth = appData.getBudget();

console.log("Накопления за месяц: " + accumulatedMonth + " y.e.");

let getTargetMonth = appData.getTargetMonth();

appData.budgetDay = Math.round(accumulatedMonth / 30);
console.log("Бютжет на день " + appData.budgetDay + " y.e.");


let getStatusIncome = appData.getStatusIncome();


console.log(appData["expenses"]);
let getExpensesMonth = appData.getExpensesMonth();



