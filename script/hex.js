//VARIABLES
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const currentColor = document.getElementById('currentColor')
const btnGen = document.getElementById('buttonGenerate')
const btnCopy = document.getElementById('buttonCopy')

//LISTENER
btnGen.addEventListener('click', function() {
    let hexValue = '#'

    for (let i = 0; i < 6; i++) {
         hexValue += hex[rand()];    
    }
    
    document.body.style.backgroundColor = hexValue
    currentColor.textContent = hexValue
    currentColor.style.color = hexValue
})

//RANDOMIZER
const rand = function() {
    return  Math.floor((Math.random() * hex.length))
}