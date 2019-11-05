// BOUTAKOURT Youssef et NAZIH Amine
//Binome 20 
let SCORE_MAX=20;
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
let joueurActif = true;
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
joueurActif=player();
if(joueurActif == true){
    if(rndm != 1){
        current[0]+=rndm;
        curr0.innerHTML=current[0];

    
    }else{
        current[0] = 0;
        curr0.innerHTML=current[0];

        joueurSuivant();
    } 
}else{
    if(rndm != 1){
        current[1]+=rndm;
        curr1.innerHTML=current[1];
    
    }else{
        current[1] = 0;
        curr1.innerHTML=current[1];
        joueurSuivant();

    } 
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
 joueurActif=true;
 buttPass.disabled=false;
 buttLnc.disabled=false;
 nomJ0.innerHTML="joueur 1<i class='ion-social-tux'></i>";
 nomJ1.innerHTML="joueur 2<i class='ion-social-tux'></i>";
 nomJ0.classList.remove('vainqueur');
 nomJ1.classList.remove('vainqueur');


}

function joueurSuivant(){
    joueurActif=player();

    if(joueurActif == true){
        score[0]+=current[0];
        score0.innerHTML= score[0];
        de.style.display = "none";
        curr0.innerHTML="0";
        if(score[0]>=SCORE_MAX){
            nomJ0.innerHTML="VAINQUEUR!";
            buttPass.disabled=true;
            buttLnc.disabled=true;
            pnlJ0.classList.add('vainqueur');
            return;
        }
        pnlJ1.classList.add('actif');
        pnlJ0.classList.remove('actif');
        current=[0,0];
       
    }else{
        score[1]+=current[1];
        score1.innerHTML= score[1];
        de.style.display = "none";
        curr1.innerHTML="0";
        if(score[1]>=SCORE_MAX){
            nomJ1.innerHTML="VAINQUEUR!";
            buttPass.disabled=true;
            buttLnc.disabled=true;
            pnlJ1.classList.add('vainqueur');
            return;
        }
        pnlJ0.classList.add('actif');
        pnlJ1.classList.remove('actif');
        current=[0,0];
        
    }
   

}

function player(){
    return  pnlJ0.classList.contains("actif");
}
buttPass.addEventListener('click',joueurSuivant);
buttNew.addEventListener('click',init);
buttLnc.addEventListener('click',lancer);