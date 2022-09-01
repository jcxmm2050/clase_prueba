class User {
  constructor(usuario, password, mail) {
    this.usuario = usuario;
    this.password = password;
    this.mail = mail;
  }
}

var registros = [];

function existeUsuario(nombreUsuario, email) {
  let i = 0; let retorno = false;
  while (i < registros.length && retorno === false) {
    if (registros[i].usuario === nombreUsuario || registros[i].mail === email) {
      retorno === true;
    }
  }
  return retorno;
}

function registrar(nombreUsuario, pass, confirmPass, email, captcha) {
  let existe = existeUsuario(nombreUsuario, email);
  if (existe === false) {
    if (pass === confirmPass && captcha === document.getElementById("captcha").innerHTML) {
      registros.push(new User(nombreUsuario, pass, email));
    }
  }
}
