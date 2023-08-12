anotações do "javascript" na aplicação:

para essa aplicação ultilizamos o método de evento

"document.getElementById("form").addEventListener"
pega a id do formulário a ser trabalhado e adiciona um ouvinte de evento.

" "submit", function(event) "
quando o botão de enviar formulario que batizamos de "subimit", irá fazer tal evento, que nesse caso será de "function(event)" que significa que, quando o usuário preencher o formula´rio de tal forma... essa é uma chamada de retorno, já que a ação é o proprio formulário e não uma function fora.

event.preventDefault();
é usado para impedir o comportamento padrão ao clicar um botão que seria recarregar a tela, feito isso, ela irá agir de acordo com o nosso parãmetro

 var username = document.getElementById("InputEmail1").value;
    var password = document.getElementById("InputPassword1").value;

    pega os valores que o usuário respondeu nos espaços como variáveis, caso a gente precise de alguns requerimentos


  if (username.length >= 4 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) 

  se o username tiver tamanho maior que 4 caractéres e que a senha tenha certos caracteres que nesse caso foi:

  {^ Início da string.
(?=.*[a-z]): Pelo menos uma letra minúscula.
(?=.*[A-Z]): Pelo menos uma letra maiúscula.
(?=.*\d): Pelo menos um dígito numérico.
.{8,}: Pelo menos 8 caracteres no total.
$: Fim da string.} 


feito isso ele será direcionado a outra página que será de login