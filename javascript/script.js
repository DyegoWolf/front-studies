function welcome(){
    var nome = prompt("Informe o seu nome: ");
    var h4 = document.getElementById("id1");
    h4.innerText = "Seja bem-vindo, " + nome;
}

function count(){
    var p1 = document.getElementById("p1");
    p1.innerText = parseInt(p1.innerText) + 1;
    console.log("aaaaaa");
}
