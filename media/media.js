//criar referencia aos elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//criar um ouvointe para o evento sumit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //não envia o formulário

    const nome = String(frm.inNome.value);
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;

    //mostrar a situação do aluno
    resp1.innerText = `Média das notas é ${media.toFixed(2)}`

    //criar condições
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a) *_*`;
        resp2.style.color = "green";
    }
    else if (media >= 4) {
        resp2.innerText = `Parabéns ${nome}! Você foi está em recuperação`;
        resp2.style.color = "yellow";
    }
    else {
        resp2.innerText = `Parabéns ${nome}! Você foi reprovado(a) T_T`;
        resp2.style.color = "red";
    }
})