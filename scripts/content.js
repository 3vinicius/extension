


setTimeout(() => {
  list = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
  console.log(list)
  list.forEach(element => {
  console.log(element)
});
}, 2000);






/* // não funciona
document.addEventListener("DOMContentLoaded", () => {
  console.log('hi')
  list = document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width')
  console.log(document.querySelectorAll('button.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width'))
  console.log(list)

})   


 */