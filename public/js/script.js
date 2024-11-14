// public/js/script.js

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  if (username === "usuario" && password === "senha123") {
    messageElement.style.color = "green";
    messageElement.textContent = "Login bem-sucedido! Redirecionando...";
    // Aqui você poderia redirecionar o usuário para outra página
    setTimeout(() => {
      window.location.href = "/home"; // Substitua "/home" pelo seu caminho desejado
    }, 2000);
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Usuário ou senha incorretos.";
  }
}
