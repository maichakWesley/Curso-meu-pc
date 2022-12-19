let celular = function(){
    this.cor = "prata";

    function ligar(){
        console.log("uma ligaçao");
    }
}

let objeto = new celular();

console.log(objeto.ligar);