window.onload= function(){
    canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
    ctx.drawImage(intro,0,0);
    caseJ1.style.opacity = 0;
    caseJ2.style.opacity = 0;
    act1.style.opacity = 0;
    act2.style.opacity = 0;
}
    
function jeu(){
    var act1 = document.getElementById("actJ1");
    var act2 = document.getElementById("actJ2");
    tour=1;
    map();
    personnage();  
    armes();
    chemin();
    dessine();
    act1.style.opacity = 0.5;
    act2.style.opacity = 0.5;
    caseJ1.style.opacity = 1;
    caseJ2.style.opacity = 0.5;
    newGame.style.opacity = 0;
    }

var j1 = document.getElementById("j1");
var j2 = document.getElementById("j2");
// fonction qui genere le tour par tour

function tourJ(){
    
    if(tour==1){
        tour=2;
        j1.style.opacity=0.5;
        j2.style.opacity= 1;
    }else{
        tour=1;
        j1.style.opacity= 1;
        j2.style.opacity=0.5;
        
    }
}
