document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositFieald = document.getElementById("doposit-field");
  const preeDepositAmount = depositFieald.value;
  const numberDeposit = parseFloat(preeDepositAmount);
  const depoBalance = document.getElementById("deposit-blance");
  const newDeop = depoBalance.innerText;
  const newNumberDepo = parseFloat(newDeop);
  const current = numberDeposit + newNumberDepo;
  depoBalance.innerText = current;

  const totalBlance = document.getElementById("blance");
  const totalNumberBlance = totalBlance.innerText;
  const ko = parseFloat(totalNumberBlance);
  const lo = ko + numberDeposit;
  totalBlance.innerText = lo;

  depositFieald.value = "";
});
