//VARIABLES
const colors = ['red', 'green', 'yellow', 'blue']
const currentColor = document.getElementById('currentColor')
// console.log(currentColor)
const btnGen = document.getElementById('buttonGenerate')
const btnCopy = document.getElementById('buttonCopy')

//LISTENER
btnGen.addEventListener('click', function() {
    let randNum = rand()
    console.log(randNum)
    
    document.body.style.backgroundColor = colors[randNum]
    currentColor.textContent = colors[randNum]
    currentColor.style.color = colors[randNum]
})

//RANDOMIZER
const rand = function() {
    return  Math.floor((Math.random() * colors.length))
}