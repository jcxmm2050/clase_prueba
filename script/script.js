class User {
  nombre = "";
  usuario = "";
  password = "";
  mail = "";
}

var registros = [];

function registrar(user, pass) {
  var registrados = [];
  if (retorno !== null) {

  }

}

function buscarUser(user) {
  var i = 0; retorno = null;
  while (i < registros.length && retorno === null) {
    if (registros[i].mail === user.mail || registros[i].usuario === user.usuario) {
      retorno = registros[i];
    } else i++;
  }
  return retorno;
}