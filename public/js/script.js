document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário para validação

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
      alert("Login bem-sucedido!");
      // Aqui você pode fazer a validação no backend ou redirecionamento
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
