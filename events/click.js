const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log("You Clicked Me!")
    console.log("Did It Work?")
}


function scream() {
    console.log("NOOOOOOOo")
    console.log("That Tickles!")
}
function dontLeave() {
    console.log("Dont Stop...")
}

btn.onmouseenter = scream;
btn.onmouseout = dontLeave;

document.querySelector('h1').onclick = function () {
    alert("Thats an H1")
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function () {
    alert("Clicked!")
})