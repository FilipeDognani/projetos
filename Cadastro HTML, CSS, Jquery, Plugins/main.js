$(document).ready(function() {
    // Aplica a máscara de CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});
  
    // Aplica a máscara de CEP
    $('#cep').mask('00000-000');
  
    // Adiciona um ouvinte de evento para o envio do formulário
    $('#cadastro-form').submit(function(event) {
      event.preventDefault(); // Previne o comportamento padrão do formulário
  
      // Pega os dados do formulário
      var formData = $(this).serialize();
  
      // Simula o envio dos dados para um servidor
      setTimeout(function() {
        // Exibe uma mensagem de sucesso na página
        $('#resultado').html('Cadastro realizado com sucesso.');
  
        // Limpa os campos do formulário
        $('#cadastro-form')[0].reset();
      }, 2000);
    });
  });
  