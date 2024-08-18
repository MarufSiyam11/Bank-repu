// step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2

  const withdrawFeild = document.getElementById("withdraw-feild");
  const newWithdrawAmountString = withdrawFeild.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  console.log(previousWithdrawTotal);
  // step 4
  const cuurentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = cuurentWithdrawTotal;

  // step 5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step 6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
  // step 7
  withdrawFeild.value = "";
});
