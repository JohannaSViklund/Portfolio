const text = document.querySelector('.cont1'); //genom att referera (const text) till ett värde (cont1) och komma åt HTML-filen med värdet i (document.) kan jag hämta värdet med (querySelector).
const splitText = 'Johanna Viklund UX-designer'; //(splitText)jag vill kunna dela upp alla bokstäverna var och för sig. 
let totalLength = splitText.length; //endast tillgänglig inom blocket variabeln deklareras i.
for( let i = 0; i < totalLength; i++) { 
    if(i < 15) {
        text.innerHTML += '<span>' + splitText[i] + '</span>'; //texten som är minre än 15 tecken (Johanna Viklund).//text anger HTML-innehållet för ett element (text.innerHTML).
    }
    if(i >= 15 && i < 16) {  
        text.innerHTML += '<span><br></span>';//texten som är mer än 15 och mindre än 16 tecken ska vara ett <br>.
    } else if(i >= 16 && i <= totalLength) {
            text.innerHTML += '<span>' + splitText[i] + '</span>';//texten som är över 16 tecken (UX-designer).
    }
}

let char = 0; //endast tillgänglig inom blocket variabeln deklareras i.
let timer = setInterval(onTick, 50); //varje bokstav visas efter 50 millesekunder. 

function onTick(){ //(funktion) är ett kodblock utformat för att utföra en viss uppgift (effekterna på texten).
    const span = text.querySelectorAll('span')[char]; //alla span-taggar följer den här regeln.
    span.classList.add('fade'); //adderar fade-effekt.
    char++
    if(char === splitText.length){ //när alla bokstäver har visats ska texten stanna- inte loopa (Johanna Viklund UX-desigener).
        complete();
        return; //return-satsen stoppar exekveringen av en funktion och returnerar ett värde (text utan effekter).
    }
}

function complete(){ //(funktion) är ett kodblock utformat för att utföra en viss uppgift (avsluta tidsintervallen- timern).
    clearInterval(timer);
    timer = null; //inget värde
}

