let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();

    if (amigo === "") {
        alert("Digite um nome!");
        return;
    }
    amigos.push(amigo);
    atualizarLista();
    document.getElementById("amigo").value = "";

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() { 
    let lista = document.querySelectorAll("#listaAmigos li");

    if (lista.length === 0) {
        alert("A lista está vazia!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    let nomeEscolhido = lista[indiceAleatorio].textContent;

    document.getElementById("resultado").textContent = `Amigo Sorteado: ${nomeEscolhido}`;
    
}

function limparLista() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").textContent = "";
}
