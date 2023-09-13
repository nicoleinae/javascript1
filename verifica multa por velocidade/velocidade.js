//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvointe para o evento sumit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const Vel1 = Number(frm.inVel1.value);
    const Vel2 = Number(frm.inVel2.value);

    //criar condições
    if (Vel2 <= Vel1) {
        resp.innerText = `Sem multa`;
        resp.style.color = "green";
    }
    else if (Vel2>Vel1 && Vel2 <= Vel1+(Vel1*20)/100) {
        resp.innerText = `Multa leve`;
        resp.style.color = "orange";
    }
    else {
        resp.innerText = `Multa grave`;
        resp.style.color = "red";
    }
})