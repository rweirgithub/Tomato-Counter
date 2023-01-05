let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count + " 🍅"
    let countStr = " 🍅 "
    let totalStr = count
    saveEl.textContent += countStr
    totalEl.textContent = +Number(totalStr) * +Number(25)
}

function reset() {
    count = 0
    document.getElementById("save-el").innerText = "";
    document.getElementById("count-el").innerText = "0 🍅";
    document.getElementById("total-el").innerText = "0";
}

