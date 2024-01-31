function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var idade = document.getElementById("idade").value;
    var url = "https://wa.me/+553131576232?text="
      + "*Inscrição Curso Desenvolvimento Web*" + "%0a"
      + "%0a"
      + "*Nome*: " + nome + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Telefone*: " + telefone + "%0a"
      + "*Idade*: " + idade + "%0a"
      + "*CPF*: " + cpf + "%0a"
    window.open(url, '_blank').focus();
  }