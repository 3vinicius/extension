/* document.getElementById('meuBotao').addEventListener('click', function() {
  // Envia uma mensagem para o content.js
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { acao: 'executarCodigo' });
  });
});

 */


chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("ongoundgerg")




  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});


