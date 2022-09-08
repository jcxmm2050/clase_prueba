let registros = [
  {
    nombre: "test",
    mail: "test@gmail.com",
    pass: "asd"
  }
];

/* Obteniendo valores del html */

const usuario = document.getElementById("username");
const password = document.getElementById("password");
const rPassword = document.getElementById("rpassword");
const mail = document.getElementById("email");
const verif = document.getElementById("verif");
const botonRegistro = document.getElementById("done");
const captcha = "valido ingreso";

/* Funciones */

function registrar() {
  let resultado;
  if (!existe(mail.innerHTML, usuario.innerHTML)) {
    if (password.innerHTML == rPassword.innerHTML) {
      if (verif.value === captcha) {
        let usuario = {nombre: usuario.innerHTML, mail: email.value, pass: password.innerHTML};
        registros.push(usuario);
        alert("Registrado");
      } else alert('Captcha incorrecto');
    } else alert('Contraseña mal colocada');
  } else alert('Usuario existente');
}

function existe(mail, usuario) {
  let retorno = false; let i = 0;
  while (i < registros.length && retorno === false) {
    if (registros[i].username === usuario || registros[i].email === mail) {
      retorno = true;
    } else i++;
  }
  return retorno;
}