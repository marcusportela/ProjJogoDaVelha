const player1 = "X";
const player2 = "O";
var vezjogador = player1;
var result = false;

var jogador1 = prompt("Para iniciar o jogo digite o nome do Jogador 1:");
document.getElementById('placar1').innerHTML = 'jogador <img src=\"img/x.png\" width=\"50px\" height=\"60px\"> é ' + jogador1
var jogador2 = prompt("Agora o nome do Jogador 2:");
document.getElementById('placar2').innerHTML = 'jogador <img src=\"img/bola.png\" width=\"50px\" height=\"60px\"> é ' + jogador2

jogador_da_vez();
jogar();

function jogador_da_vez(){
    if (result) {
        
    return;}
    if (vezjogador == player1) {
        document.getElementById("quemjoga").innerHTML = "\
        <h1>Vez do jogador: <img src=\"img/x.png\" width=\"50px\" height=\"50px\"><h1>\
        "
    } else {
        document.getElementById("quemjoga").innerHTML = "\
        <h1>Vez do jogador: <img src=\"img/bola.png\" width=\"50px\" height=\"50px\"><h1>\
        "
    }
}
function jogar(){
    var grades = document.getElementsByClassName("grade");
    for (var i = 0; i < grades.length; i++){
    
        grades[i].addEventListener("click", function(){
            if (result) {return;}
            if(this.getElementsByTagName("img").length == 0){
                if (vezjogador == player1){
                    this.innerHTML = "<img src=\"img/x.png\" width=\"90px\" height=\"90px\">";
                    this.setAttribute("jogada", player1);
                    vezjogador = player2;
                }else{
                    this.innerHTML = "<img src=\"img/bola.png\" width=\"90px\" height=\"90px\">";
                    this.setAttribute("jogada", player2);
                    vezjogador = player1;
                }
                jogador_da_vez();
                resultado();
            }
        }    
    )}   
        
}
function resultado(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var Ganhador = "";

    if (((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) ){
        
        Ganhador = a1;

    }else if(((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) ) 
    {
        Ganhador = b2;

    }else if(((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")))
    {   
        Ganhador = c3;

    }

    

    if (Ganhador != ""){
        if (Ganhador == "X"){
            Ganhador = (jogador1 + ' "X"');

        }else{

            Ganhador = (jogador2 + ' "O"');
        }
        
        result = true;
        document.getElementById("resultadopag").innerHTML = "O vencedor foi "  + Ganhador 
        document.getElementById("quemjoga").innerHTML = " "
    }
}
function refreshPage(){
    window.location.reload();
} 