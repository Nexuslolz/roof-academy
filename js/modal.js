/////// open modal window
const openModal = document.querySelectorAll('.content-box__number');
const modal = document.querySelector('.page-header__form');
const closeModal = document.querySelector('.form-content__wrapper')

openModal.forEach(elem =>
    elem.addEventListener('click', function(){
    if(!(modal.classList.contains('page-header__form_open'))){
        modal.classList.add('page-header__form_open')
    }
}))
closeModal.addEventListener('click', function() {
    if(modal.classList.contains('page-header__form_open')){
        modal.classList.remove('page-header__form_open')
    }
})


/////send form
const sendForm = document.querySelector('.form-content__submit');
const input = document.getElementById("popup-input");
const checkbox = document.querySelector('.form-content__confirm')
const validCheck =  document.getElementById("validation-check");

function isValid() {
    if (!input.checkValidity()) {
        input.innerHTML = input.validationMessage;
    } else if (!(checkbox.checked)) {
        validCheck.innerHTML = 'Нужно ваше согласие с условиями политики конфиденциальности!'
        return 
    } else {
        modal.innerHTML = `<div class = "form-content_send">
<h2 class = "form-content__header">Спасибо!</h2> 
<p class="form-content__text"> Ваша заявка отправлена.</p>
 </div>`
 setTimeout(function(){
     modal.classList.remove('page-header__form_open')
     location.reload()
 },2000)
    }
}

sendForm.addEventListener('click', isValid)