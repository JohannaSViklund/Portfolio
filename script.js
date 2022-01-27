const text = document.querySelector('.cont1');
const splitText = 'Johanna Viklund UX-Designer';
text.textContent = '';
let totalLength = splitText.length;
let i;
for(i = 0; i < totalLength; i++) {
    if(i < 15) {
        text.innerHTML += '<span>' + splitText[i] + '</span>';
    }
    if(i >= 15 && i < 16) {
        text.innerHTML += '<span><br></span>';
    } else if(i >= 16 && i <= totalLength) {
            text.innerHTML += '<span>' + splitText[i] + '</span>';
    }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

