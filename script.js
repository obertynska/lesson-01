let money, income, addExpenses, deposit, mission, period;

mission ="be happy!";

//HW #2

//1
money = 3000;
income = "rent";
addExpenses = "lessons, english, restaurants";
deposit = false;
mission = 300000;
period = 3;

//2

let budgetDay = money / 30;


//HW #3

money = +prompt("Ваш месячный доход?");

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

let arr = addExpenses.toLowerCase().split(", ");
console.log(arr);

deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");


//HW #4

let showTypeof = function(data){
    console.log(data, typeof(data));
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

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

let getExpensesMonth = function(){
      return amount1 + amount2;
};
console.log("Сумма всех обязательных расходов за месяц: " + getExpensesMonth() + " y.e.");


let getAccumulatedMonth = function(){
    return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

console.log("Накопления за месяц: " + accumulatedMonth + " y.e.");

let getTargetMonth = function(){
    let result = mission / accumulatedMonth ;
    return Math.floor(result);
};
console.log("Ваша цель будет достигнута за : " + getTargetMonth() + " мес.");

budgetDay = Math.round(accumulatedMonth / 30);
console.log("Бютжет на день " + budgetDay + " y.e.");