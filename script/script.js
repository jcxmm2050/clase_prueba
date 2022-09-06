var registros = [];

const username = document.getElementById("username").innerHTML;
const password = document.getElementById("password").innerHTML;
const rPassword = document.getElementById("r-password").innerHTML;
const email = document.getElementById("email");
const captcha = document.getElementById("captcha").innerHTML;

function registrar() {
  if (!existe(email, username)) {
    if (password === rPassword) {
      if (captcha === "valido ingreso") {
        registros.push({username: username, password: password, email: email});
      }
    }
  }  
}

function existe(email, username) {
  let retorno = false; let i = 0;
  while (i < registros.length && retorno === false) {
    if (registros[i].username === username || registros[i].email === email) {
      retorno = true;
    }
  }
  return retorno;
}