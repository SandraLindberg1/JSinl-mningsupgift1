 /*För att undvika buggar och felsöka så har jag bland annat avnänt mig av use strict för att göra det lite enklare att skriva kod. https://www.w3schools.com/js/js_strict.asp

 Sen för att kunna se mer vad man ha skrivit och se ev fel så har jag försökt följa så att man ha mellanslag mellan olika operatorer och att använda semicolon. https://www.w3schools.com/js/js_conventions.asp
 
 För att vara helt ärlig så ha jag inte använt mig så mkt av F12 faktiskt då jag använder mig av "go live" här i vs code och ser där vad som händer och rättar därefter.
 Och funkar inget av det jag ha gjort så ta jag bara bort det och försöker hitta en ny lösning genom google och W3 bla.  */

 "use strict";

<<<<<<< Updated upstream
=======
 /* 
  Eventet onload som jag använder här är för att köra igång mina functioner. Och då väntar onload med att köra tills allt på sidan är klart innan den kör,
  till skillnad mot DOMContentLoaded som kör när DOM är färdigladdat. 
*/
>>>>>>> Stashed changes
window.onload = function() {

    document.getElementById("numbers").oninput = function (){
        removeSections();

      let add = parseFloat(this.value);
        
      for (let i = 0; i < add; i++) {
<<<<<<< Updated upstream
       console.count();
=======

        /*
        Kommenterade ut console.count då den 3-dubblade typ inläggen inne i konsolen men inte på själva sidan. Jag tyckte det var sjukt störigt så testade att kommenterade
        ut den. inte för att det gav en error men det blev en lite med defult 1 defult 2 defult 3 när jag ville visa ett inlägg på sidan. Samma när man minskar så lägger
        den på defult antal inne i konsolen. */

        //console.count();


       // definera variabler
>>>>>>> Stashed changes
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

/*
  KOMPLETTERING!
  Med denna loop som håller koll på "blog räknaren", dvs att står det en 1a så ska den visa ett inlägg, står det 10 så visa den 10 inlägg osv.
  den räknare även nerråt så när man ändra från tex 10 till 9 så tar den bort ett fram tills det står 0 och då visar den inte fler.
  Genom att använda .length propertyn för nodelist objektet så bestämmer man antalet element som matchar den angivna väljaren, som section i detta fallet,
  som man sedan kan gå igenom alla element och extrahera den informationen man vill ha. 
*/
function removeSections(){
  let removeSections = document.querySelectorAll("section");
  for (let i = 0; i < removeSections.length; i++) {
    removeSections[i].remove();
  }
}


//Här så fixar man så att man redigera i textboxarna genom att använda sig av focus när man klickar i boxarna, dock så sparas det inte.
//Så när man ökar eller minskar antal inlägg så ändras den tillbaka till det som stor från början.


/*
  KOMPLETTERING!
  Onclick eventet gör så att jag kan klicka på min textbox. Och då kallar onclick eventet på funtionen som då gör contentEditable till true som då gör att
  elemtentet hamnar i fokus.
  Sen när elementet inte är i fokus längre, dvs onblur eventet, så kallas det på funktionen igen men då sätter den contentEditble till false istället och då
  går det inte att redigera inlägget längre. 
*/
function  makeEditable(textbox){
    textbox.onclick = function() {
        textbox.contentEditable = true;
        textbox.focus();
    };
    textbox.onblur = function() {
        textbox.contentEditable = false;
    };
  }