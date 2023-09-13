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

        dvPalco.appendChild(figure);
    }

});