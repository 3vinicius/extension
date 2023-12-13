document.getElementById('meuBotao').addEventListener('click', function() {
  // Envia uma mensagem para o content.js
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { acao: 'executarCodigo' });
  });
});


