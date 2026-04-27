let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let btnCounter=document.getElementById('increment-btn')
let count = 0
let intervalId;

const increment=function(){
    intervalId = setInterval(() =>{
    count += 1
    countEl.textContent = count
    },1000)
} 
btnCounter.addEventListener('click',increment)
function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    clearInterval(intervalId)
}
