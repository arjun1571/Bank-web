document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const email = emailField.value;

  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  if (email === "arjun@email.com" && password === "arjun112233") {
    window.location.href = "bank.html";
  } else {
    window.alert("worng password");
  }
});
