//obter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let resposta = "";
    const tamanho = Number(frm.invalor.value);
    const vetor = [];
    for (let i = 0; i<tamanho; i++){
        let aleatorio = Math.floor(Math.random() * 1000 + 1); // de números entre 1 e 1000
        vetor.push(aleatorio);
    }
    console.log(vetor);

    let maior = 0;
    let menor = 1001;
    let soma = 0;
    let pares = 0;

    for(let i=0; i< vetor.length; i++){
        if (vetor [i] > maior){ //calcula maior número
            maior = vetor [i];
        }
        if (vetor [i] < menor){ // calcula menor número
            menor = vetor [i];
        }
        if( vetor[i]%2==0){ // calcula a quantidade de números pares
            pares++;
        }

        soma = soma + vetor [i]; // soma todos os números
        
    }
    let impares = vetor.length-pares; // calcula a quantidade de números impares
    let media = soma/vetor.length; // calcula a média de todos os valores do vetor

    resposta +=`O maior número gerado foi: ${maior}\n`;
    resposta += `O menor número gerado foi: ${menor}\n`;
    resposta += `A média da sona dos valores é: ${media}\n`
    resposta += `Há nesse vetor ${pares} números pares\n`
    resposta += `Há nesse vetor ${impares} números impares\n`

    resp.innerText = resposta;

})