//VARS
const popup = document.getElementById('popup')
const color = document.getElementById('currentColor')
const colorText = color.textContent

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
    let position = 0
    let positionShift = popup.clientHeight

    position += positionShift * 3
    popup.style.transform = `translateY(${position}px)`

    position = 0
    setTimeout(function() {
        popup.style.transform = `translateY(${position}px)`
    }, 1800)
}