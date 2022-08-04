let total_budget;
let expense;
let expense_percentage;
let balance;
let expense_amount;
let numOfClicks = 1;
var total_amount = 0;

const expense_list = document.querySelector("#display_expenses");
const expensePercentage_list = document.querySelector("#display_expensePercentage");
const expenseAmount_list = document.querySelector("#display_expenseAmount");

document.getElementById("submit_button").onclick = function(){
  total_budget = document.getElementById("budget_amount").value;

  if (total_budget > 0){
    setTotalBudget();
  }
  else {
    let error_message1 = window.confirm("Cannot read empty value OR was not a positive number value. Please try again.");
  }
  document.getElementById("budget_amount").value = "";
}

document.getElementById("add_button").onclick = function(){
  expense = document.getElementById("enter_expense").value;
  expense_percentage = document.getElementById("enter_percentage").value;

  if (isNaN(expense) && expense_percentage > 0 && expense_percentage <= 100){

    getExpenses();

  }
  else if (!isNaN(expense)){
    let error_message2 = window.confirm("Cannot read empty value OR was not a name of an expense. Please try again.")
  }
  else if (expense_percentage < 0 || isNaN(expense_percentage)){
    let error_message3 = window.confirm("Cannot read empty value OR was not a positive number value. Please try again.")
  }
  
  
  document.getElementById("enter_expense").value = "";
  document.getElementById("enter_percentage").value = "";
}

function setTotalBudget(){
  document.getElementById("budget_label").innerHTML = "$" + total_budget;
}

function getExpenses(){
  expense_percentage /= 100;
  
  expense_amount = total_budget * expense_percentage;

  if(numOfClicks == 1){
    balance = total_budget - expense_amount;
  }
  else if(numOfClicks > 1){
    balance -= (total_budget * expense_percentage);
  }

  if (balance >= 0){

    setBalance();

    setExpenses();

    setExpensePercentage()

    setExpenseAmount();

    getTotal();

  }
  else if(balance < 0){
    let error_message = window.confirm("Insufficient balance");
  }
}

function setExpenseAmount(){
  let expenseAmount_item = document.createElement("li");
  expenseAmount_item.textContent = "$" + expense_amount.toFixed(2);
  expenseAmount_list.append(expenseAmount_item);
}

function setBalance(){
  if (numOfClicks == 1){
    document.getElementById("balance_label").innerHTML = "$" + balance.toFixed(2);
    numOfClicks++;
  }
  else if (numOfClicks > 1){
    document.getElementById("balance_label").innerHTML = "$" + balance.toFixed(2);
    numOfClicks++;
  } 
}

function getTotal(){
  total_amount += expense_amount;
  document.getElementById("total_amount").textContent = "$" + total_amount.toFixed(2);
}

function setExpensePercentage(){
  expense_percentage *= 100;
  let expensePercentage_item = document.createElement("li");
  expensePercentage_item.textContent = expense_percentage + "%";
  expensePercentage_list.append(expensePercentage_item);
}

function setExpenses(){
  let expense_item = document.createElement("li");
  expense_item.textContent = expense;
  expense_list.append(expense_item);
}
