//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    //obter os valores dos imputs
    const nome = String(frm.inNome.value);
    const masculino = frm.inMasculino.checked;
    const feminino = frm.inFeminino.checked;
    const altura = Number(frm.inAltura.value);
    
    //calculo em formato padrão:
    //let peso;

    //criar condições
    //if (feminino) {
    //    peso = 21 * Math.pow(altura,2);
    //}
    //else if (masculino) {
    //    peso = 22 *  Math.pow(altura,2);
    //}

    //operador ternal, substitui o if/else
    const peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura,2);


    resp.innerText = `${nome}: Seu peso ideal é de: ${peso.toFixed(2)} Kg`;
    resp.style.color = "green";

})
//limpa o formulário
frm.addEventListener("reset",() => {
    resp.innerText - "";

})