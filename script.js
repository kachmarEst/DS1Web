let SCORE_MAX=100;
let nomJ0 = document.querySelector('#nom-0');
let nomJ1 = document.querySelector('#nom-1');
let score0 = document.querySelector('#score-0');
let score1 = document.querySelector('#score-1');
let curr0 = document.querySelector('#courent-0');
let curr1 = document.querySelector('#courent-1');
let buttNew = document.querySelector('.btn-new');
let buttLnc = document.querySelector('.btn-lancer');
let buttPass = document.querySelector('.btn-passe');
let pnlJ0 = document.querySelector('.panel-joueur-0');
let pnlJ1 = document.querySelector('.panel-joueur-1');
let de = document.querySelector('.de');
let score=[0,0];
let current=[0,0];
let joueur1 = true ;
let rndm = 0;
//add
function lancer(){
    de.style.display = "block";

rndm = Math.floor(Math.random()*6)+1;
switch(rndm){
    case 1: 
             de.src="de-1.png";

             break;
    case 2: 
            de.src="de-2.png"; 
            break;
    case 3: 
            de.src="de-3.png"; 
            break;
    case 4: 
            de.src="de-4.png";
             break;
    case 5: 
            de.src="de-5.png";
             break;
    case 6: 
            de.src="de-6.png";
             break;
    default: alert("oops something went wrong");break;

}
if(rndm != 1){
    current[0]+=rndm;
    curr0.innerHTML=current[0];

}else{
    current[0] = 0;
    curr0.innerHTML="0";

    pnlJ1.classList.add('actif');
    pnlJ0.classList.remove('actif');
} 

}
function init(){
    score0.innerHTML="0";
    score1.innerHTML="0";
    curr0.innerHTML="0";
    curr1.innerHTML="0";
    score=[0,0];
    current=[0,0];
 de.style.display = "none";
 pnlJ0.classList.add('actif');
 pnlJ1.classList.remove('actif');

}
buttNew.addEventListener('click',init);
buttLnc.addEventListener('click',lancer);