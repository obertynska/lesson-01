//all data types return true except number.

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, income, addExpenses, deposit, mission, period;

mission ="be happy!";


money = 3000;
income = "rent";
addExpenses = "lessons, english, restaurants";
deposit = false;
mission = 300000;
period = 3;

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

let arr = addExpenses.toLowerCase().split(", ");
console.log(arr);

deposit = confirm("Есть ли у вас депозит в банке?");


let start = function(){
    do{
        money = prompt("Ваш месячный доход?");
    }
    while ( !isNumber(money) );
};
start();


let showTypeof = function(data){
    console.log(data, typeof(data));
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses =[];

let getExpensesMonth = function(){
      let sum = 0;
      let promptResult =0;

      for (let i = 0; i<2; i++) {

          expenses[i] = prompt("Введите обязательную статью расходов?");

          do {
              promptResult = prompt("Во сколько это обойдется?");
          } while (!isNumber(promptResult));

          sum += parseFloat(promptResult);
      }
      console.log(expenses);

      return sum;
    console.log(typeof(sum));
};

let expensesAmount = getExpensesMonth();
console.log(expensesAmount);

console.log("Сумма всех обязательных расходов за месяц: " + expensesAmount + " y.e.");


let getAccumulatedMonth = function(){
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

console.log("Накопления за месяц: " + accumulatedMonth + " y.e.");

let getTargetMonth = function(){
    let result = Math.floor(mission / accumulatedMonth) ;
    if (result >= 0) {
        console.log("Ваша цель будет достигнута за : " + result + " мес.");
    } else {
        console.log("Ваша цель не будет достигнута");
    }
};
getTargetMonth();

let budgetDay = Math.round(accumulatedMonth / 30);
console.log("Бютжет на день " + budgetDay + " y.e.");


let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        console.log("У вас высокий уровень дохода 🤑");
    } else if ( budgetDay >= 600 && budgetDay < 1200){
        console.log("У вас средний уровень дохода 😉");
    } else if (budgetDay >= 0 && budgetDay < 600 ){
        console.log("К сожалению у вас уровень дохода ниже среднего 😪");
    } else {
        console.log("Что то пошло не так 🧐");
    }
};
getStatusIncome();



