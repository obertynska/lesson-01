let money, income, addExpenses, deposit, mission, period;

mission ="be happy!";

/*alert(mission);*/

console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, totam?");

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