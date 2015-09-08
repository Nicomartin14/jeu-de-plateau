//declaration de l'intro
var intro = new Image();
intro.src= "images/intro.png"

//declaration des variables de terrains
var asteroide = new Image();
asteroide.src="images/astéroide.png";

var etoile= new Image();
etoile.src="images/etoile.png"; 


//déclaration des variables armes
var canon1= new Image();
canon1.src="images/armes0.png";

var canon2 = new Image;
canon2.src = "images/armes5.png";
var flocon = new Image();
flocon.src="images/armes1.png";

var boule= new Image();
boule.src= "images/armes2.png";

var missile= new Image();
missile.src= "images/armes3.png";

var tornade= new Image();
tornade.src= "images/armes4.png";


//déclaration des variable joueurs
var joueur1= new Image();
joueur1.src="images/megaman.png";

var joueur2= new Image();
joueur2.src= "images/megaman2.png";


//declaration du chemin
var caseChemin= new Image;
caseChemin.src="images/chemin.png";

// si deplacement non autorisé
var caseImpossible = new Image;
caseImpossible.src = "images/interdit.png";

//initialisation des coordonnees de la map

function map() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    //Creation plateau
    for (i=0; i<500; i+=50) {
        map[i] = new Array(500);
        for (j=0; j<500; j+=50) {
            map[i][j] = {terrain: "", armes: "", joueurs: "", chemin: "", impossible: ""};
        }
    }
    //Generation des tilesets d'obstacles
    for (i=0; i<10; i++) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);

        var obstX = randX * 50;
        var obstY = randY * 50;

        if(map[obstX][obstY].terrain === "obstacle"){
            i--;
        }else{
            map[obstX][obstY].terrain = "obstacle";
        }
    }
}

//fonction qui dessine la map
function dessine(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var wp_J1= document.getElementById("armeOrigine1");
    var wp_J2= document.getElementById("armeOrigine2");
    var nameWp1= document.getElementById("armeP1");
    var nameWp2= document.getElementById("armeP2");
    var degatJ1= document.getElementById("degatArme1");
    var degatJ2= document.getElementById("degatArme2");
    var pv1= document.getElementById("pvJ1");
    var pv2= document.getElementById("pvJ2");
    
 ctx.clearRect(0,0,canvas.width,canvas.height);
    
    for (i=0; i<500; i+=50) {
        for (j=0; j<500; j+=50) {
            if(map[i][j].terrain == "obstacle"){
            ctx.drawImage(asteroide,i,j,50,50);
            }
            if(map[i][j].terrain== ""){
                ctx.drawImage(etoile, i, j);
            }
            if(map[i][j].chemin=="chemin"){
                ctx.drawImage(caseChemin,i,j,50,50);
            }
            if(map[i][j].armes=="armes0"){
                ctx.drawImage(canon1,i,j,50,50);
            }
            if(map[i][j].armes == "armes5"){
                ctx.drawImage(canon2,i,j,50,50);
            }
            if(map[i][j].armes=="armes1"){
                ctx.drawImage(flocon, i, j,50,50);
            }
            if(map[i][j].armes=="armes2"){
                ctx.drawImage(boule, i, j,50,50);
            }
            if(map[i][j].armes=="armes3"){
                ctx.drawImage(missile, i, j,50,50);
            }
            if(map[i][j].armes=="armes4"){
                ctx.drawImage(tornade, i, j,50,50);
            }
            if(map[i][j].joueurs=="joueur1"){
                ctx.drawImage(joueur1,i,j);
            }
            if(map[i][j].joueurs=="joueur2"){
                ctx.drawImage(joueur2,i,j);
            }
            if(map[i][j].impossible != ""){
                ctx.drawImage(caseImpossible,i,j);
            }
        }
    }

    for(i=0;i<6;i++){
        if(joueur.j1.arme== "armes"+i){
            armeOrigine1.src= "images/armes"+i+".png";
            nameWp1.innerHTML= wp["armes"+i].nom;
            degatJ1.innerHTML= wp["armes"+i].degat;
            pv1.innerHTML= joueur.j1.pv;
        }
        if(joueur.j2.arme== "armes"+i){
            armeOrigine2.src= "images/armes"+i+".png";
            nameWp2.innerHTML= wp["armes"+i].nom;
            degatJ2.innerHTML= wp["armes"+i].degat;
            pv2.innerHTML= joueur.j2.pv;
        }
    }
}
