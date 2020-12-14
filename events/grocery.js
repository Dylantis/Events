// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = document.querySelectorAll('input')[0];
    const qtyInput = document.querySelectorAll('input')[1];
    console.log(productInput.value, qtyInput.value);
    const newList = document.createElement('li');
    list.appendChild(newList);
    newList.innerText = `${productInput.value} ${qtyInput.value}`
    productInput.value = '';
    qtyInput.value = ''
})