const pegarDados = () => {
  var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
      var status = xhr.status;
      if (status === 200) {
        //Callback caso de tudo certo
        callback(null, xhr.response);
      } else {
        //Callback caso de algum erro
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  //Utilizando o método
  getJSON('/JS/dados.json', function (err, dados) {
    if (err !== null) {
      console.log('Ocorreu um erro' + err);
    } else {
      // Pegar dados de inputs
      const email = document.getElementById('email').value
      const nif = document.getElementById('nif').value
      let mensagem = 1

      for (let i = 0; i <= dados.length; i++) {
        if (dados[i].email == email) {
          if (dados[i].nif == nif) {
            mensagem = 0
            break
          } else {
            mensagem = 1
            break
          }
        } else {
          mensagem = 1
          break
        }
      }

      if (mensagem == 0) {
        alert("Logado com sucesso")
        window.location.href = "/paginas/tabela.html";
      } else {
        alert("Os dados inseridos estão errados")
      }
    }
  });
}
