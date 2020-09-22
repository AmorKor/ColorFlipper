//VARS
const copyBtn = document.getElementById('buttonCopy')

//LISTENER
copyBtn.addEventListener('click', function() {
    var color = document.getElementById('currentColor').innerText

    textToClipboard(color)
    activeScale()
})

//FUNCS
const textToClipboard = function(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

const activeScale = function() {
    copyBtn.style.transform = `scale(1.1)`

    setTimeout(function() {
        copyBtn.style.transform = `scale(1)`        
    }, 300)
}