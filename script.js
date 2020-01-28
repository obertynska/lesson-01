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
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

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


let getExpensesMonth = function(a, b){
    return a + b;
};
console.log("Сумма всех обязательных расходов за месяц: " + getExpensesMonth(amount1, amount2));


let getAccumulatedMonth = function(a, b, c){
    return a - b - c;
};
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

console.log("Накопления за месяц: " + accumulatedMonth);

let getTargetMonth = function(accumulatedMonth){
    return mission / accumulatedMonth ;
};
console.log("Ваша цель будет достигнута за : " + getTargetMonth(accumulatedMonth) + " мес.");

budgetDay = accumulatedMonth / 30;
console.log("Бютжет на день " + budgetDay);