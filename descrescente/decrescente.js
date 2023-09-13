//obter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter número informado
    const n = Number(frm.invalor.value);

    //criar um laço de repetição
    for(let i = n; i<= 0; i--) {
        resp.innerText = i + "\n";   
    }
})