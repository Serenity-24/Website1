loadText = document.querySelector('.loading-text)
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring,40)

function blurring(){
    load++
    loadText.innerText = `$(load)%`
loadText.style.opacity = 0.5
bg.style.filter = "blur(10px)"
}