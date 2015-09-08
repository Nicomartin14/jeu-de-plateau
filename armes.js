//génération des armes
function armes(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
//Generation des tilesets d'armes
    for (i=0; i<1; i++) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);

        var obstX = randX * 50;
        var obstY = randY * 50;

        if(map[obstX][obstY].armes !== "" || map[obstX][obstY].terrain !== "" || map[obstX][obstY].joueurs !== ""){
            i--;
            
        }else{
            map[obstX][obstY].armes = "armes1";
        }
    }
        for (i=0; i<1; i++) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);

        var obstX = randX * 50;
        var obstY = randY * 50;

        if(map[obstX][obstY].armes !== "" || map[obstX][obstY].terrain !== "" || map[obstX][obstY].joueurs !== ""){
            i--;
            
        }else{
            map[obstX][obstY].armes = "armes2";
        }
    }
        for (i=0; i<1; i++) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);

        var obstX = randX * 50;
        var obstY = randY * 50;

        if(map[obstX][obstY].armes !== "" || map[obstX][obstY].terrain !== "" || map[obstX][obstY].joueurs !== "" ){
            i--;
            
        }else{
            map[obstX][obstY].armes = "armes3";
        }
    }
        for (i=0; i<1; i++) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);

        var obstX = randX * 50;
        var obstY = randY * 50;

        if(map[obstX][obstY].armes !== "" || map[obstX][obstY].terrain !== "" || map[obstX][obstY].joueurs !== ""){
            i--;
            
        }else{
            map[obstX][obstY].armes = "armes4";
        }
    }
}
//creation de l'objet weapons(wp) qui servira
//pour recuperer le nom et le nombre de degats

var wp={

    armes0:{
        nom: "canon",
        degat: 10
},
    armes5:{
        nom:"canon",
        degat: 10
    },
    armes1:{
        nom: "blizard",
        degat: 20
},
    armes2:{
        nom:"boule de feu",
        degat: 30,
    },
    armes3:{
        nom:"missile nucléaire",
        degat: 50,
    },
    armes4:{
        nom:"tornade",
        degat: 25
    }
}
