/* Creando la clase */

class Usuario {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get username() {
    return this.username;
  }
  get email() {
    return this.email;
  }
  get password() {
    return this.password;
  }

  set username(nuevoUser) {
    return this.username = nuevoUser;
  }
  set email(nuevoMail) {
    return this.email = nuevoMail;
  }
  set password(nuevaPass) {
    return this.password = nuevaPass;
  }
}

let registros = [];

/* Obteniendo valores del html */

const usuario = document.getElementById("username");
const password = document.getElementById("password");
const rPassword = document.getElementById("rpassword");
const mail = document.getElementById("email");
const verif = document.getElementById("verif");
const botonRegistro = document.getElementById("done");
const captcha = "valido ingreso";
/* Funcion al boton */

botonRegistro.addEventListener('click', registrar);

/* Funciones */

function registrar() {
  if (!existe(mail.innerHTML, usuario.innerHTML)) {
    if (password.innerHTML == rPassword.innerHTML) {
      if (verif.value === captcha) {
        registros.push(new Usuario(usuario.innerHTML, email.value, password.innerHTML));
        console.log("Registrado");
      } else console.log('Captcha incorrecto');
    } else console.log('Contraseña mal colocada');
  } else console.log('Usuario existente');
}

function existe(mail, usuario) {
  let retorno = false; let i = 0;
  while (i < registros.length && retorno === false) {
    if (registros[i].username === usuario || registros[i].email === mail) {
      retorno = true;
    }
  }
  return retorno;
}