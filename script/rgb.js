//VARS
const currentColor = document.getElementById('currentColor')
const btnGen = document.getElementById('buttonGenerate')
const btnCopy = document.getElementById('buttonCopy')

//LISTENER
btnGen.addEventListener('click', function() {
    let rgbArray = []
    
    for (let i = 0; i < 3; i++) {
        rgbArray.splice(i, 1, rand())
    }

    const rgbValue = 'RGB('+ rgbArray.toString() + ')' 

    document.body.style.backgroundColor = rgbValue
    currentColor.textContent = rgbValue
    currentColor.style.color = rgbValue
})

//RANDOMIZER
const rand = function() {
    return  Math.round((Math.random() * 255))
}

