let newCount = document.getElementById('count-el')

let counts = 0

function increment() {
 counts += 1
 newCount.innerText = counts
 console.log(counts)
}
function save() {
    console.log(counts)
}




