//как добраться до css
// const bodyDoc = document.querySelector('.carusel')

// const styleElement = getComputedStyle(bodyDoc)

// console.log(styleElement.backgroundColor)

//Работа с классами
const firstSection = document.querySelector('.header')
const button = document.querySelector('.carusel_button1')
console.log(firstSection.classList)

function changeColor(){
    if(firstSection.classList.contains('header')){
        firstSection.classList.add('header_1')
        firstSection.classList.remove('header')
    }
    else{
        firstSection.classList.remove('header_1')
        firstSection.classList.add('header')
    }
   
}

button.addEventListener('click', changeColor)

//довавить класс через кнопку и удалить (клик туда- клик обратно)
// function changeColor(){
//     firstSection.classList.toggle('имя класса')
// }