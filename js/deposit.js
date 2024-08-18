// step 1 -add even listener to the deposit buttun
document.getElementById("btn-diposit").addEventListener("click", function () {
  // step-2 -get the dipositamouunt from the deposit input feild
  const depositFeild = document.getElementById("deposit-feild");
  const newDepositAmountString = depositFeild.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  // step 3 -get the currect deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // step 4 -add number to set the total deposit
  const cuurentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = cuurentDepositTotal;
  // step 5- get balance current total

  const balnceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balnceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step 6 - calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //   set the balance total
  balnceTotalElement.innerText = currentBalanceTotal;
  // step-7 -clear the depositfield
  depositFeild.value = "";
});
