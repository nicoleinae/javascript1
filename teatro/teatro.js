//capturar os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; //quantidade toral de poltronas

const reservadas = []; //vetor com as poltronas reservadas

window.addEventListener("load", () => { //ao carregar a janela...
    const ocupadas = localStorage.getItem("teatroOcupadas")
        ? localStorage.getItem("teatroOcupadas").split(";")
        : []; //split para inserir o ";"

    for(let i=1; i<=POLTRONAS; i++) {
        const figure = document.createElement("figure"); //cria a tag "figure"
        const imgStatus = document.createElement("img");

        imgStatus.src = ocupadas.includes(i.toString()) 
            ? "img/ocupada.jpg"
            : "img/disponivel.jpg";
        imgStatus.className = "Poltrona"

        const figureCap = document.createElement("figcaption")

        //quantidade de zeros antes do numero da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";
        // cria o número da poltrona
        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if (i % 24 == 12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure);

        if(i % 24 == 0 && dvPalco.appendChild(document.createElement("br")));

    }

});

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);

    if (poltrona > POLTRONAS) { // se escolher um número não listado no mapa
        alert("Informe um número de poltronas válido");
        frm.inPoltrona.value = ""; // limpa o imput
        frm.poltrona.focus(); // volta no campo do imput ao fechar o alert
        return;
    }

    //captura a imagem poltrona filha de divPalco. É -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];
    imgPoltrona.src = "img/reservada.jpg" // modifica os atributos da imagem
    reservadas.push(poltrona);

    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();
})

frm.btConfirmar.addEventListener("click", () =>{
    const ocupadas = [];

    for(let i = reservadas.length -1; i >=0; i--){
        ocupadas.push(reservadas[i]);
        const imgPoltrona = dvPalco.querySelectorAll ("img") [reservadas[i] -1];
        imgPoltrona.src = "img/ocupada.jpg"

        reservadas.pop();
    }

})