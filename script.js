//Запихнуть элемент внутьрь

//create peremennyj - like bodyDoc e.t.c 

const bodyDoc = document.body

//create elment

let pElem = document.createElement('p')

//input some text in p

pElem.innerText = 'Hi'

// вызвать и указать позицию

bodyDoc.prepend(pElem)
