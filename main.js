let newCount = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let counts = 0

function increment() {
 counts += 1
 newCount.innerText = counts
}
function save() {
    let saveC= " " + counts + ' - '
    saveEl.textContent += saveC
    newCount.textContent = 0
    counts = 0
}




