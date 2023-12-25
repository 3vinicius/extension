


/* setTimeout(() => {
  list = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
  console.log(list)
  list.forEach(element => {
  console.log(element)
});
}, 2000);
 */

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting === 'hello') {
    // Realize ações na página conforme necessário
    console.log("Mensagem recebida na página:", request);

    // Enviar uma resposta se necessário
    sendResponse({ response: "Mensagem recebida com sucesso na página!" });
  }
});

/* // não funciona
document.addEventListener("DOMContentLoaded", () => {
  console.log('hi')
  list = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
  console.log(document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width'))
  console.log(list)

})   


 */