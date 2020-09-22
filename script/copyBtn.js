//VARS
const copyBtn = document.getElementById('buttonCopy')

//LISTENER
copyBtn.addEventListener('click', function() {
    var color = document.getElementById('currentColor').innerText

    textToClipboard(color)
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
