//VARS
const currentColor = document.getElementById('currentColor')
const btnGen = document.getElementById('buttonGenerate')
const btnCopy = document.getElementById('buttonCopy')

let rgbArray = []
let rgbaValue = ''

//LISTENER
btnGen.addEventListener('click', function() {
    rgbArray = []
    
    for (let i = 0; i < 3; i++) {
        rgbArray.splice(i, 1, rand())
    }
    rgbArray.push(randFloat())
    
    rgbaValue = 'RGBa('+ rgbArray.toString() + ')' 

    checkAlpha()
    document.body.style.backgroundColor = rgbaValue
    currentColor.textContent = rgbaValue
})

//RANDOMIZER
const rand = function() {
    return  Math.floor((Math.random() * 255))
}

const randFloat = function() {
    return (Math.round(Math.random() * 10) / 10)
}

const checkAlpha = function() {
    if (rgbArray[3] <= 0.5) {
        let rgbaValueTextFixed = ''

        rgbArray.splice(3, 1, 0.5)
        rgbaValueTextFixed = 'RGBa('+ rgbArray.toString() + ')'
        currentColor.style.color = rgbaValueTextFixed
    } else {
        currentColor.style.color = rgbaValue    
    }
}