document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw");
  const lo = withdrawAmount.value;
  const joo = parseFloat(lo);

  const withArount = document.getElementById("withdraw-amount");
  const loo = withArount.innerText;
  const moo = parseFloat(loo);
  const totalWithdraw = joo + moo;

  withArount.innerText = totalWithdraw;

  const balanceAm = document.getElementById("blance");
  const blanceValue = balanceAm.innerText;
  const balanceAmount = parseFloat(blanceValue);
  const currentBlance = balanceAmount - joo;
  balanceAm.innerText = currentBlance;

  withdrawAmount.value = "";
});
