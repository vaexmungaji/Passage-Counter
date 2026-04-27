let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

const increment= setInterval(() =>{
    count += 1
    countEl.textContent = count
    },1000)


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    clearInterval(increment)
}
