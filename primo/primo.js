//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvointe para o evento sumit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const num = Number(frm.inNum.value);
    var valida;
    //criar condições
    for(i=2; i<num; i++){
        if (num%i==0) {
            valida = false;
    }
    }

    if ( valida == false) {
        resp.innerText = `Não é primo`;
    }
    else {
        resp.innerText = `É primo`;
    }
})