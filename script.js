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
function init(){
    score0.innerHTML="";
    score1.innerHTML="";
    curr0.innerHTML="";
    curr1.innerHTML="";
    score=[0,0];
    current=[0,0];
 de.style.display = "none";
 pnlJ0.classList.add('actif');
 pnlJ1.classList.remove('actif');

}