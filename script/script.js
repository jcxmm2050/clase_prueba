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
const captcha = "valido ingreso";
const loginMail = document.getElementById("l-mail");
const loginPass = document.getElementById("l-pass");

/* Funciones */

function registrar() {
  let resultado;
  if (!existe(mail.value, usuario.value)) {
    if (password.value == rPassword.value) {
      if (verif.value === captcha) {
        let newUser = {nombre: usuario.value, mail: email.value, pass: password.value};
        registros.push(newUser);
        console.log(registros);
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

function login() {
  let i = 0, found = false;
  while (i < registros.length && found === false) {
    if (registros[i].mail === loginMail.value && registros[i].pass === loginPass.value) {
      alert("Te has logeado exitosamente");
      found = true;
    } else i++;
  }
  if (!found) alert("No se ha encontrado el usuario");
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})