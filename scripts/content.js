


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
   

    execute()




    // Enviar uma resposta se necessário
    sendResponse({ response: "Mensagem recebida com sucesso na página!" });
  }
});






function algortmeExecute(more) {
  more.forEach(async e => {
        e.click()
        var numeroDeExecucoes = 5;
        var intervalo = 2000;
        var contador = 0;
        var intervalID = await setInterval(async function() {
          document.querySelector("button.artdeco-button.artdeco-button--muted.artdeco-button--1.artdeco-button--full.artdeco-button--secondary.ember-view.scaffold-finite-scroll__load-button").click()
          contador++;
          if (contador === numeroDeExecucoes) {
            clearInterval(intervalID);
            if(clickInBtns()){
              closeModal()
            }
          }
        }, intervalo);
  })
}

function closeModal() {
    list = document.querySelectorAll(".artdeco-modal.artdeco-modal--layer-default.discover-cohort-recommendations-modal")[0]
      
    childrens = list.childNodes

    childrens.forEach(e => {
          if (e.nodeType == 1 && e.getAttribute("aria-label") == 'Fechar'){
              e.click()
          }
    })
    return true
}

function clickInBtns(){
    list = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
    list.forEach(element => {
      if (element.getAttribute('aria-label').includes('Convidar')) {
        conosole.log(element)
      }
  });
}















var numeroDeExecucoes = 10;
        var intervalo = 1000;
        var contador = 0;
        var intervalID = setInterval(function() {
          document.querySelector("button.artdeco-button.artdeco-button--muted.artdeco-button--1.artdeco-button--full.artdeco-button--secondary.ember-view.scaffold-finite-scroll__load-button").click()
          contador++;
          if (contador === numeroDeExecucoes) {
            clearInterval(intervalID);
            execute()
          }
        }, intervalo);



function execute(){
listSections = document.querySelectorAll(".discover-section-header")


collections = []

listSections.forEach(section => {
    section.childNodes.forEach(e => {
        if(e.nodeType == 1) {
            collections.push(e)
        }
    })
})




isValide = false;
collectionsMore = []
collections.forEach(e => {
    if(e.innerHTML.includes('Pessoas que talvez você conheça')){
       isValide = true
        return 
    } 

    if(isValide){
        collectionsMore.push(e)
        isValide = false
    }
})


algortmeExecute(collectionsMore)
}


