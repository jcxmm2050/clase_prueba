class User {
  usuario = "";
  password = "";
  mail = "";
}

var registros = [];

function registrar(usuario, pass, pass2, mail, validacion, validacionFinal) {
  retorno = buscarUser(usuario, mail);
  if (retorno !== undefined) {
    if (pass === pass2) {
        if (validacion === validacionFinal) {
            retorno = new User(usuario, pass, mail);
            registros.push(User);
        }
    }
  }

}

function buscarUser(usuario, mail) {
 retorno = registros.find(User.usuario === usuario && User.mail === mail);
  return retorno;
}