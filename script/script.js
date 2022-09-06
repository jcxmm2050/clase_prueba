var registros = [
  {
    username: "test",
    password: "test01",
    email: "testing@gmail.com"
  }
];

const username = document.getElementById("username");
const password = document.getElementById("password");
const rPassword = document.getElementById("r-password");
const email = document.getElementById("email");
const captcha = document.getElementById("captcha");
const botonRegistro = document.getElementById("done");

botonRegistro.addEventListener('click', test);

function test() {
  console.log("Hola")
}

function registrar() {
  if (!existe(email.innerHTML, username.innerHTML)) {
    if (password.innerHTML === rPassword.innerHTML) {
      if (captcha.innerHTML === "valido ingreso") {
        registros.push({username: username, password: password, email: email});
        console.log("Registrado");
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