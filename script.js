let graczKrzyzyk=true;

let licznik=0;

const kolor='#d21841';
 
const przyciski=document.querySelectorAll('.przycisk');

console.log(przyciski);

const info=document.getElementById('infoGry');
 
info.textContent='Aktualnie gra:X';

let wynikX=document.getElementById('WynikX').value;
let wynikO=document.getElementById('WynikO').value;

wynikX=0;
wynikO=0;

document.getElementById("WynikX").innerHTML = "Krzyżyk: " + wynikX;
document.getElementById("WynikO").innerHTML = "Kółko: " + wynikO;
// wynikX.textContent=0;
// wynikO.textContent=1;

 
console.log(licznik)
//restart
let restartBtn = document.getElementById("restart");
let btnRef = document.querySelectorAll(".przycisk");
const enableButtons = () => {
    btnRef.forEach((element) => {
      element.innerText = "";
      element.disabled = false;

      //infoGry po restarcie
      infoGry.style.color="#c5c3c0";
      info.textContent='Aktualnie gra:X';
      graczKrzyzyk=true;
      // document.getElementById("WynikX").innerHTML = "Krzyżyk: " + wynikX;
      // document.getElementById("WynikO").innerHTML = "Kółko: " + wynikO;
      
    });
    //disable popup
    popupRef.classList.add("hide");
    
};

restartBtn.addEventListener("click", () => {

    licznik = 0;
    enableButtons();


  });

//end
przyciski.forEach(function(przycisk){
 
 
    przycisk.addEventListener('click',function(){
    console.log('kliknięto')
 
      wstawZnak(przycisk);
 
    });
 
});
 

 
function wstawZnak(przycisk){

    //restart kolorów po wygranej,remisie
    przycisk.style.color="white"
    

  if (graczKrzyzyk){
    

    przycisk.textContent="X";
    graczKrzyzyk=false;
    info.textContent='Aktualnie gra:O';
  }
 
  else{
    przycisk.textContent="O";
    graczKrzyzyk=true;
    info.textContent='Aktualnie gra:X';
 
  }
 
  przycisk.disabled=true;
  sprawdzWygrana();
}
 
 

function sprawdzWygrana(){
 
  licznik++;
 
 if(przyciski[0].textContent==przyciski[1].textContent && przyciski[1].textContent==przyciski[2].textContent &&przyciski[1].textContent!=''){
 
   przyciski[0].style.color=kolor;
   przyciski[1].style.color=kolor;
   przyciski[2].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
 }
  else if(przyciski[3].textContent==przyciski[4].textContent && przyciski[3].textContent==przyciski[5].textContent && przyciski[4].textContent!=''){
   przyciski[3].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[5].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
  else if(przyciski[6].textContent==przyciski[7].textContent && przyciski[7].textContent==przyciski[8].textContent && przyciski[7].textContent!=''){
   przyciski[6].style.color=kolor;
   przyciski[7].style.color=kolor;
   przyciski[8].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
  else if(przyciski[0].textContent==przyciski[3].textContent && przyciski[3].textContent==przyciski[6].textContent && przyciski[3].textContent!=''){
   przyciski[0].style.color=kolor;
   przyciski[3].style.color=kolor;
   przyciski[6].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
  else if(przyciski[1].textContent==przyciski[4].textContent && przyciski[4].textContent==przyciski[7].textContent && przyciski[4].textContent!=''){
   przyciski[1].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[7].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
  else if(przyciski[2].textContent==przyciski[5].textContent && przyciski[5].textContent==przyciski[8].textContent && przyciski[5].textContent!=''){
   przyciski[2].style.color=kolor;
   przyciski[5].style.color=kolor;
   przyciski[8].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
  else if(przyciski[0].textContent==przyciski[4].textContent && przyciski[4].textContent==przyciski[8].textContent && przyciski[8].textContent!=''){
   przyciski[0].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[8].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
    else if(przyciski[2].textContent==przyciski[4].textContent && przyciski[4].textContent==przyciski[6].textContent && przyciski[4].textContent!=''){
   przyciski[2].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[6].style.color=kolor;
   infoGry.style.color=kolor;
   wygrana();
  }
 
  else if(licznik==9){
 
    info.textContent='remis!';
    przyciski[0].style.color = "yellow";
    przyciski[1].style.color = "yellow";
    przyciski[2].style.color = "yellow";
    przyciski[3].style.color = "yellow";
    przyciski[4].style.color = "yellow";
    przyciski[5].style.color = "yellow";
    przyciski[6].style.color = "yellow";
    przyciski[7].style.color = "yellow";
    przyciski[8].style.color = "yellow";
    infoGry.style.color="yellow";
  }
 
}
 
 
function wygrana(){
 
  przyciski.forEach(function(przycisk){
 
      przycisk.disabled=true;
     przycisk.classList.remove('hover');
    console.log('usuwam');
});
 
 
  if (graczKrzyzyk){
    wynikO++
    info.textContent='wygrywa kółko';
    document.getElementById("WynikO").innerHTML = "Kółko: " + wynikO;

  }
  else{
    wynikX++
    info.textContent='wygrywa krzyżyk!';
    document.getElementById("WynikX").innerHTML = "Krzyżyk: " + wynikX;

  }
 
}