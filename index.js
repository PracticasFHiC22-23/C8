const homePage = document.querySelector(".home-Page")
const formPage = document.querySelector(".form-Page")
const resultPage = document.querySelector(".result-Page")

const linkForm = homePage.querySelector(".linkForm")
linkForm.onclick= function(event){
   event.preventDefault()
   homePage.classList.add('off')
   formPage.classList.remove('off')
}

const linkHome = resultPage.querySelector(".linkHome")
linkHome.onclick= function(event){
    event.preventDefault()
    resultPage.classList.add('off')
    homePage.classList.remove('off')
 }
const catForm = formPage.querySelector(".form__details")
catForm.onsubmit= function(event){
    event.preventDefault()
    // const name= catForm.name.value
    formPage.classList.add('off')
    // homePage.classList.add('off')
    resultPage.classList.remove('off')

}