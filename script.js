'use strict';

//all data types return true except number.

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n) ;
};

let money,
    start = function () {
        do {
            money = prompt("Ваш месячный доход?", 60000);
        }
        while (isNaN(money) || money === null || money === "");
    };


start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 30000,
    period: 3,
    asking: function () {
        if (confirm("Есть ли у вас дополнительный заработок?")) {
            let itemIncome,
                cashIncome;
            do {
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            }while (isNumber(itemIncome) || itemIncome === " " || itemIncome === "");


            do {
                cashIncome = prompt("Сколько в месяц вы зараватываете на этом?", 10000);
                appData.income[itemIncome] = cashIncome;
            } while (!isNumber(cashIncome));
        }


        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

        addExpenses = addExpenses.split(",");

        appData.addExpenses = addExpenses.map(function(item){
            return item.trim().charAt(0).toUpperCase() +  item.trim().slice(1).toLowerCase()
        }).join(", ");

      

        appData.deposit = confirm("Есть ли у вас депозит в банке?");

        for (let i = 0; i < 2; i++) {
            let title;
            do {
                title = prompt("Введите обязательную статью расходов?");
            } while (isNumber(title) || title === "" || title === " ");
            do {
                appData.expenses[title] = prompt("Во сколько это обойдется?");

            } while (!isNumber(appData.expenses[title]));

        }

    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function () {
       return appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            console.log("У вас высокий уровень дохода 🤑");
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            console.log("У вас средний уровень дохода :wink:");
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
            console.log("К сожалению у вас уровень дохода ниже среднего :sleepy:");
        } else {
            console.log("Что то пошло не так 🧐");
        }
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do {
                appData.percentDeposit = prompt("Какой годовой процент?", "10");
            } while(!isNumber(appData.percentDeposit));

            do {
                appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            }while(!isNumber(appData.moneyDeposit))
        }
    },
    calcSavedMoney: function () {
         return appData.budgetMonth * appData.period;
    }

};     

appData.asking();

appData.getExpensesMonth();

appData.getBudget();

console.log("Сумма всех обязательных расходов за месяц: " + appData.expensesMonth  + " y.e.");

if (appData.expensesMonth >= 0) {
    console.log(`Ваша цель будет достигнута за : ` + Math.ceil(appData.getTargetMonth()) + ` мес.`);
} else {
    console.log("Ваша цель не будет достигнута");
}

appData.getStatusIncome();

for (let key in appData){
    console.log(`Наша программа включает в себя данные: + key + , значение данных: ` + appData[key]);
}

appData.getInfoDeposit(
);


