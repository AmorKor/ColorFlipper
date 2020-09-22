//VARS
const popup = document.getElementById('popup')
const color = document.getElementById('currentColor')
const colorText = color.textContent
let position = 0
let positionShift = popup.clientHeight
// const copyBtn = document.getElementById('buttonCopy')
console.log(colorText)

copyBtn.addEventListener('click', function() {
    var currentText = document.querySelector('#currentColor')
    
    if(currentText.textContent == colorText){
        popup.textContent = 'Generate color first'
        
        animation()
    } else {
        popup.textContent = 'Copied to clipboard'
        
        animation()
    }
    
})

const animation = function() {
    position += positionShift * 2
    popup.style.transform = `translateY(${position}px)`

    position = 0
    setTimeout(function() {
        popup.style.transform = `translateY(${position}px)`
    }, 1800)
}