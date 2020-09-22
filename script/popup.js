//VARS
const popup = document.getElementById('popup')
const color = document.getElementById('currentColor')
const colorText = color.textContent
let position = 0
let positionShift = popup.clientHeight
// console.log(colorText)

copyBtn.addEventListener('click', function() {
    var currentText = document.querySelector('#currentColor')
    
    if(currentText.textContent == colorText){
        popup.textContent = 'Generate color first'
        // positionShift = popup.clientHeight
        
        animation()
    } else {
        popup.textContent = 'Copied to clipboard'
        
        animation()
    }
    
})

const animation = function() {
    position += positionShift * 3
    popup.style.transform = `translateY(${position}px)`

    position = 0
    setTimeout(function() {
        popup.style.transform = `translateY(${position}px)`
    }, 1800)
}