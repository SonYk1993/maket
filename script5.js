// const firstSection = document.querySelector('.header')
// const button1 = document.querySelector('.carusel_button1')
// const button2 = document.querySelector('.carusel_button2')
// const button3 = document.querySelector('.carusel_button3')

// function changeBgImage(){
//     if(firstSection.classList.contains('header_2') || firstSection.classList.contains('header_2') ){
//         firstSection.classList.add('header')
//         firstSection.classList.remove('header_2')
//         firstSection.classList.remove('header_3')
//     }

// }
// function changeBgImage1(){
//     if(firstSection.classList.contains('header') || firstSection.classList.contains('header_3') ){
//         firstSection.classList.add('header_2')
//         firstSection.classList.remove('header')
//         firstSection.classList.remove('header_3')
//     }

// }
// function changeBgImage2(){
//     if(firstSection.classList.contains('header') || firstSection.classList.contains('header_2') ){
//         firstSection.classList.add('header_3')
//         firstSection.classList.remove('header')
//         firstSection.classList.remove('header_2')
//     }

// }

// button1.addEventListener('click', changeBgImage)
// button2.addEventListener('click', changeBgImage1)
// button3.addEventListener('click', changeBgImage2)
//btnColorActive



// function changeBtnColor(){
//     if(button1.classList.contains('btnColorActive')){
//         button2.classList.add('btnColorActive')
//         button3.classList.remove('btnColorActive')
//     }
//     else{
//         button1.classList.add('btnColorActive')
//         button2.classList.remove('btnColorActive')
//         button3.classList.remove('btnColorActive')
//     }
   
// }
// function changeBtnColor2(){
//     button2.classList.add('btnColorActive')
//     button1.classList.remove('btnColorActive')
//     button3.classList.remove('btnColorActive')
// }
// function changeBtnColor3(){
//     button3.classList.add('btnColorActive')
//     button1.classList.remove('btnColorActive')
//     button2.classList.remove('btnColorActive')
// }

// button1.addEventListener('click', changeBtnColor)
// button2.addEventListener('click', changeBtnColor2)
// button3.addEventListener('click', changeBtnColor3)


const buttons = document.querySelectorAll('.carusel_button')
function changeBtnColor(event){
    buttons.forEach(elem => elem.classList.remove('btnColorActive'))
    event.target.classList.add('btnColorActive')
}
buttons.forEach((elem)=> elem.addEventListener('click', changeBtnColor))



