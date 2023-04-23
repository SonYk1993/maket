const bodyElem = document.getElementById('h1')
bodyElem.innerText = 'Fuck off'

//методы вставки элементаво
// const newP = document.querySelector('.header_nav')
// newP.innerText = '<p>This is my my text</p>'
//outerHTML замена
//innerText не безопасный метод


//Добавление/создание элетента в элемент
const myP = document.createElement('p')
myP.innerText = 'Hi im here'
bodyElem.append(myP) //append - вставляет поледним
// prepend - in ferst position
//after
//before

//еще варианты вставки
bodyElem.insertAdjacentHTML('afterbegin', '<p>eeadad<p/>')



