//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvointe para o evento sumit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const num1 = Number(frm.inNum1.value);
    const num2 = Number(frm.inNum2.value);

    const soma = (num1 + num2);

    //criar condições
    if (num1%2==0) {
        resp.innerText = `É par`;
        resp.style.color = "green";
    }
    else {
        resp.innerText = `É impar`;
        resp.style.color = "red";
    }
})