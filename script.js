document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-contato");
    var listaContatos = document.getElementById("lista-contatos");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio do formulário
  
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
  
      var contato = {
        nome: nome,
        telefone: telefone,
        email: email
      };
  
      adicionarContato(contato);
      form.reset();
    });
  
    function adicionarContato(contato) {
      var elementoContato = document.createElement("div");
      elementoContato.innerHTML = "<strong>Nome:</strong> " + contato.nome + "<br>" +
                                  "<strong>Telefone:</strong> " + contato.telefone + "<br>" +
                                  "<strong>E-mail:</strong> " + contato.email + "<br><br>";
  
      listaContatos.appendChild(elementoContato);
    }
  });