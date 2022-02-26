let textboxvalue = document.querySelector('#text-box').value
let button = document.querySelector('#button-addon2');
let li_dom = document.createElement('li')
button.addEventListener('click', addList )

function addList(){
    li_dom.innerHTML = textboxvalue
}