//on enregistre les coordonees des joueurs 
//aleatoirement et non adjacent
function personnage(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    //objet joueurs
 joueur={
    
    j1:{
        nom: "joueur1",
        pv: 100,
        arme: "armes0",
        defense:false,
        attaque:false,
        fight:false,
        x:0,
        y:0,
    },
    j2:{
        nom: "joueur2",
        pv: 100,
        arme: "armes5",
        defense:false,
        attaque:false,
        fight:false,
        x:0,
        y:0,
    }
}

    for (i=0;i<1;i++){
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);
        
        var pers1X= randX*50;
        var pers1Y= randY*50;
        
        if(map[pers1X][pers1Y].terrain!=="" || map[pers1X][pers1Y].armes !==""){
            i--;
        }else{
            map[pers1X][pers1Y].joueurs= "joueur1";
            joueur.j1.x = pers1X;
            joueur.j1.y = pers1Y;
        }
    }

    for (i=0;i<1;i++){
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);
        
        var pers2X= randX*50;
        var pers2Y= randY*50;
        
        if(map[pers2X][pers2Y].terrain!=="" || map[pers2X][pers2Y].armes !=="" || map[pers2X][pers2Y].joueurs!==""){
            i--;
        }else if(pers1X-50 === pers2X && pers1Y === pers2Y){    //à gauche
            i--;
        }else if(pers1X+50 === pers2X && pers1Y === pers2Y){    //à droite
            i--;
        }else if(pers1Y+50 === pers2Y && pers1X === pers2X){    //en bas
            i--;
        }else if(pers1Y-50 === pers2Y && pers1X === pers2X){    //en haut
            i--;
        }else{
            map[pers2X][pers2Y].joueurs= "joueur2";
            joueur.j2.x = pers2X;
            joueur.j2.y = pers2Y;
        }
    }
}

//generation du chemin

function chemin(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    for (i=0;i<500;i+=50){
        for(j=0;j<500;j+=50){
            if(map[i][j].chemin=="chemin"){
                map[i][j].chemin="";
            }
            }
        }
    
    recup("joueur"+tour);
    
    //chemin de droite
    var a=x+50;
    for(i=0;i<3;i++){
        if(a>=500){
            break;                                       //le petit break qui va bien pour ne pas bug le jeu quand on sort du canvas!!!
        }else if(map[a][y].terrain=="" && map[a][y].joueurs==""){
            map[a][y].chemin="chemin";
            a+=50;
        }
    }   
    
    //chemin de gauche
    var a= x-50;
    for(i=0;i<3;i++){
        if(a<0){
            break;
        }else if(map[a][y].terrain=="" && map[a][y].joueurs==""){
            map[a][y].chemin="chemin";
            a-=50;
    }
    }
    
    //chemin du bas
    var a= y+50;
    for(i=0;i<3;i++){
        if(a>=500){
            break;
        }else if(map[x][a].terrain=="" && map[x][a].joueurs==""){
            map[x][a].chemin="chemin";
            a+=50;
    }
}
    //chemin du haut
    var a= y-50;
    for(i=0;i<3;i++){
        if(a<0){
            break;
        }else if(map[x][a].terrain=="" && map[x][a].joueurs==""){
            map[x][a].chemin="chemin";
            a-=50;
        }
    }
}
