let money, income, addExpenses, deposit, mission, period;

mission ="be happy!";

//alert(mission);


//console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, totam?");

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

console.log(addExpenses.length);

console.log(`Период равен ` + period + ` месяцам` );
console.log(`Цель заработать ` + mission + ` евро` );

let arr = addExpenses.toLowerCase().split(", ");
console.log(arr);

let budgetDay = money / 30;
console.log(budgetDay + ` eur`);



//HW #3

money = +prompt("Ваш месячный доход?");

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");

let budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц: " + budgetMonth);

let month = mission/budgetMonth;
console.log("Ваша цель будет достигнута за: " + Math.round(month) + " месяцев");

budgetDay = budgetMonth/30;
console.log("Бюджет на день: " + Math.floor(budgetDay));

if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода 🤑");
} else if ( budgetDay >= 600 && budgetDay < 1200){
    console.log("У вас средний уровень дохода 😉");
} else if (budgetDay >= 0 && budgetDay < 600 ){
    console.log("К сожалению у вас уровень дохода ниже среднего 😪");
} else {
    console.log("Что то пошло не так 🧐");
}
