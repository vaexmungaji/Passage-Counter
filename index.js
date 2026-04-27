let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let btnCounter=document.getElementById('increment-btn')
let count = 0

btnCounter.addEventListener('click',function()
{
    const increment= setInterval(() =>{
    count += 1
    countEl.textContent = count
    },1000)
})
function save() {
    clearInterval(increment)
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
