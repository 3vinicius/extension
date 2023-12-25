

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('meuBotao');
  btn.addEventListener('click', sendMessageToPage);
});

async function sendMessageToPage() {
  // Obter a guia ativa
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Enviar uma mensagem para a guia ativa
  chrome.tabs.sendMessage(activeTab.id, { greeting: "hello" }, function(response) {
    console.log(response);
  });
}

/* 
document.addEventListener('DOMContentLoaded', function() {
  var injetarScriptButton = document.getElementById('injetarScript');

  injetarScriptButton.addEventListener('click', function() {
      // Injetar o script na página ativa
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              { file: 'scriptDaPagina.js' } // Substitua 'scriptDaPagina.js' pelo nome do seu script
          );
      });
  });
});

 */


/* 

function connection(element) {
  buttons = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
  loadBtn = document.querySelector("button.artdeco-button.artdeco-button--muted.artdeco-button--1.artdeco-button--full.artdeco-button--secondary.ember-view.scaffold-finite-scroll__load-button")
  
  try {
    
    loadConnections(loadBtn)

    clickConnections()

  } catch (error) {
    
  }
  
  
}


function loadConnections(btn) {
  for (let timer = 0; timer < 10; timer++) {
    result = setTimeout((btn) => {
      btn.click()
    }, 5000)
  }
}


function clickConnections(btn) {
  
  
} */





/* 
list = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
list.forEach(element => element.click())

btn = document.querySelector("button.artdeco-button.artdeco-button--muted.artdeco-button--1.artdeco-button--full.artdeco-button--secondary.ember-view.scaffold-finite-scroll__load-button")
btn.click() */