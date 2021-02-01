 /*För att undvika buggar och felsöka så har jag bland annat avnänt mig av use strict för att göra det lite enklare att skriva kod. https://www.w3schools.com/js/js_strict.asp

 Sen för att kunna se mer vad man ha skrivit och se ev fel så har jag försökt följa så att man ha mellanslag mellan olika operatorer och att använda semicolon. https://www.w3schools.com/js/js_conventions.asp
 
 För att vara helt ärlig så ha jag inte använt mig så mkt av F12 faktiskt då jag använder mig av "go live" här i vs code och ser där vad som händer och rättar därefter.
 Och funkar inget av det jag ha gjort så ta jag bara bort det och försöker hitta en ny lösning genom google och W3 bla.  */

 "use strict";

window.onload = function() {

    document.getElementById("numbers").oninput = function (){
        removeSections();

      let add = parseFloat(this.value);
        
      for (let i = 0; i < add; i++) {
       console.count();
       let main = document.querySelector("main");
       let section = document.createElement("section");
       let title = document.createElement("h1");
       let text = document.createElement("p");
    
       title.innerText = "Title!" ;
       text.innerText = "Some Text!";

       makeEditable(title); //Så man kan ändra titeln i boxarna
       makeEditable(text); //Så man kan ändra texten i boxarna

       section.append(title);
       section.append(text);
       main.append(section);

      }

    }
}
//Denna gör så att när man trycker nerråt på räknaren så rensa den inläggen så att dom försvinner.
function removeSections(){
  let removeSections = document.querySelectorAll("section");
  for (let i = 0; i < removeSections.length; i++) {
    removeSections[i].remove();
  }
}
//Här så fixar man så att man redigera i textboxarna genom att använda sig av focus när man klickar i boxarna, dock så sparas det inte.
//Så när man ökar eller minskar antal inlägg så ändras den tillbaka till det som stor från början.
function  makeEditable(textbox){
    textbox.onclick = function() {
        textbox.contentEditable = true;
        textbox.focus();
    };
    textbox.ontext = function() {
        textbox.contentEditable = false;
    };
  }