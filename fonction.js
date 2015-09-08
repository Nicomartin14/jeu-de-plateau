function recup(player){
    for(i=0;i<500;i+=50){
        for(j=0;j<500;j+=50){
            if(map[i][j].joueurs==player){
                x = i;
                y = j;
            }   
        }
    }
}

var caseJ1 = document.getElementById("j1");
var caseJ2 = document.getElementById("j2");
var attaque1 = document.getElementById("attaque1");
var defense1 = document.getElementById("defense1");
var attaque2 = document.getElementById("attaque2");
var defense2 = document.getElementById("defense2");
var act1 = document.getElementById("actJ1");
var act2 = document.getElementById("actJ2");
var newGame = document.getElementById("newGame");


//fonction pour deplacer le joueur
function coord(event){
    
    var ev= event || window.event;
    var clickX= ev.offsetX;
    var clickY= ev.offsetY;
    
    var coordX=0;
    var coordY=0;
    
    for(i=0;i<500;i+=50){
        if(clickX>=i && clickX<=i+50){
            var coordX=i;
        }
        if(clickY>=i && clickY<=i+50){
            var coordY=i;
        }
    }
    
    recup("joueur"+tour);
    var verif = false;
    var verif1 = false;
    
    if(map[coordX][coordY].chemin=="chemin"){
        map[x][y].joueurs="";
        map[coordX][coordY].joueurs="joueur"+tour;
        if(tour==1){
            joueur.j1.x=coordX;
            joueur.j1.y=coordY;
        }else{
            joueur.j2.x=coordX;
            joueur.j2.y=coordY;
        }
        verif = true;
        chemin();
        dessine();
    }else{
        map[coordX][coordY].impossible = "non";
        dessine();
        setTimeout(function(){map[coordX][coordY].impossible= ""; dessine();},250);
        verif = false;
    }
    
    if(map[coordX][coordY].armes !== "" && verif == true){
        for(i=0;i<6;i++){
            if (map[coordX][coordY].armes == "armes"+i){
                if(tour==1){
                    map[coordX][coordY].armes= joueur.j1.arme;
                joueur.j1.arme= "armes"+i;
                break;
                }else{
                    map[coordX][coordY].armes= joueur.j2.arme;
                    joueur.j2.arme= "armes"+i;
                    break;
                }
            }
        }
    }
        var j1X = joueur.j1.x;
        var j1Y = joueur.j1.y;
        var j2X = joueur.j2.x;
        var j2Y = joueur.j2.y;
        
    if(j1X - 50 === j2X && j1Y === j2Y ||
       j1X + 50 === j2X && j1Y === j2Y ||
       j1Y - 50 === j2Y && j1X === j2X ||
       j1Y + 50 === j2Y && j1X === j2X){
        if(tour == 1){
            joueur.j1.attaque = true;
            act1.style.opacity = 1;
        }else{
            joueur.j2.attaque = true;
            act2.style.opacity = 1;
        }
        fight();
        verif1 = false;
    }else{
        joueur.j1.fight= false;
        joueur.j2.fight= false;
        act1.style.opacity = 0.5;
        act2.style.opacity = 0.5;
        verif1= true;  
        chemin();
        dessine();   
    }
    if(verif == true && verif1 == true){
        tourJ();
        chemin();
        dessine();
    }
}



function fight(){
    if(tour== 1){
        act1.style.opacity = 1;
        joueur.j1.fight = true;
        act2.style.opacity = 0.5;
    }else{
        act2.style.opacity = 1;
        joueur.j2.fight= true;
        act1.style.opacity = 0.5;
    }
    chemin();
    dessine();
}

function fightJ1(){
    if(joueur.j1.fight == true){
        act1.style.opacity = 1;
        if(joueur.j2.defense == true){
            if(joueur.j1.arme == "armes0"){
                pvJ2.innerHTML = joueur.j2.pv -= (wp.armes0.degat / 2);
            }else if(joueur.j1.arme == "armes1"){
                pvJ2.innerHTML = joueur.j2.pv -= (wp.armes1.degat / 2);
            }else if(joueur.j1.arme == "armes2"){
                pvJ2.innerHTML = joueur.j2.pv -= (wp.armes2.degat / 2);
            }else if(joueur.j1.arme == "armes3"){
                pvJ2.innerHTML = joueur.j2.pv -= (wp.armes3.degat / 2);
            }else if(joueur.j1.arme == "armes4"){
                pvJ2.innerHTML = joueur.j2.pv -= (wp.armes4.degat / 2);
            }else if(joueur.j1.attaque == true && joueur.j1.arme == "armes5"){
                pvJ1.innerHTML= joueur.j1.pv -= (wp.armes5.degat/2);
        }
        }else{
            if(joueur.j1.attaque == true && joueur.j1.arme == "armes0"){
                pvJ2.innerHTML= joueur.j2.pv -= wp.armes0.degat;
            }else if(joueur.j1.attaque==true && joueur.j1.arme == "armes1"){
                pvJ2.innerHTML= joueur.j2.pv -= wp.armes1.degat;
            }else if(joueur.j1.attaque==true && joueur.j1.arme == "armes2"){
                pvJ2.innerHTML= joueur.j2.pv -= wp.armes2.degat;
            }else if(joueur.j1.attaque==true && joueur.j1.arme == "armes3"){
                pvJ2.innerHTML= joueur.j2.pv -= wp.armes3.degat;
            }else if(joueur.j1.attaque==true && joueur.j1.arme == "armes4"){
                pvJ2.innerHTML= joueur.j2.pv -= wp.armes4.degat;
            }else if(joueur.j1.attaque == true && joueur.j1.arme == "armes5"){
                pvJ1.innerHTML= joueur.j2.pv -= wp.armes5.degat;
            }
        }
        joueur.j1.fight = false;
        act1.style.opacity = 0.5;
        joueur.j2.defense = false;
        joueur.j2.attaque = true;
        tourJ();
        chemin();
        dessine();
        fight();
        }
    if(joueur.j1.pv <= 0 || joueur.j2.pv <= 0){
            gameOver();
    }
}


function fightJ2(){
    if(joueur.j2.fight== true){
        act2.style.opacity = 1;
        if(joueur.j1.defense == true){
            if(joueur.j2.arme == "armes0"){
                pvJ1.innerHTML = joueur.j1.pv -= (wp.armes0.degat / 2);
            }else if(joueur.j2.arme == "armes1"){
                pvJ1.innerHTML = joueur.j1.pv -= (wp.armes1.degat / 2);
            }else if(joueur.j2.arme == "armes2"){
                pvJ1.innerHTML = joueur.j1.pv -= (wp.armes2.degat / 2);
            }else if(joueur.j2.arme == "armes3"){
                pvJ1.innerHTML = joueur.j1.pv -= (wp.armes3.degat / 2);
            }else if(joueur.j2.arme == "armes4"){
                pvJ1.innerHTML = joueur.j1.pv -= (wp.armes4.degat / 2);
            }else if(joueur.j2.arme == "armes5"){
                pvJ1.innerHTML= joueur.j1.pv -= (wp.armes5.degat/2);
            }
        }else{
            if(joueur.j2.attaque == true && joueur.j2.arme == "armes0"){
                pvJ1.innerHTML= joueur.j1.pv -= wp.armes0.degat;
            }else if(joueur.j2.attaque==true && joueur.j2.arme == "armes1"){
                pvJ1.innerHTML= joueur.j1.pv -= wp.armes1.degat;
            }else if(joueur.j2.attaque==true && joueur.j2.arme == "armes2"){
                pvJ1.innerHTML= joueur.j1.pv -= wp.armes2.degat;
            }else if(joueur.j2.attaque==true && joueur.j2.arme == "armes3"){
                pvJ1.innerHTML= joueur.j1.pv -= wp.armes3.degat;
            }else if(joueur.j2.attaque==true && joueur.j2.arme == "armes4"){
                pvJ1.innerHTML= joueur.j1.pv -= wp.armes4.degat;
            }else if(joueur.j2.attaque == true && joueur.j2.arme == "armes5"){
                pvJ1.innerHTML= joueur.j1.pv -= wp.armes5.degat;
            }
        }

        joueur.j2.fight = false;
        act2.style.opacity = 0.5;
        joueur.j1.defense = false;
        joueur.j1.attaque = true;
        tourJ();
        chemin();
        dessine();
        fight();
        }
    if(joueur.j1.pv <= 0 || joueur.j2.pv <= 0){
            gameOver();
        }
    }

function defenseJ1(){
    if(joueur.j1.fight == true){
        joueur.j1.defense =true;
        tourJ();
        chemin();
        dessine();
        fight();
        joueur.j1.fight = false;
        act1.style.opacity = 0.5;
    }
}

function defenseJ2() {
    if(joueur.j2.fight == true){
        joueur.j2.defense = true;
        tourJ();
        chemin();
        dessine();
        fight();
        joueur.j2.fight = false;
        act2.style.opacity = 0.5;
    }
}


    var finJ1= new Image;
    finJ1.src= "images/bleu.png";

    var finJ2= new Image;
    finJ2.src= "images/rouge.png";

function gameOver(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
        
    if(joueur.j1.pv <= 0){
        ctx.drawImage(finJ2,0,0);
        }
    if(joueur.j2.pv <= 0){
        ctx.drawImage(finJ1,0,0);
        }
        
    caseJ1.style.opacity = 0;
    caseJ2.style.opacity = 0;
    act1.style.opacity = 0;
    act2.style.opacity = 0;
    newGame.style.opacity = 1;
    joueur.j1.attaque = false;
    joueur.j2.attaque = false;
    }
