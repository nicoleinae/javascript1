//obter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter número informado
    const n = Number(frm.inMetro.value);
    const v = Number(frm.inVelocidade.value);

    let resposta = ""
    let buraco = 0
    let cont = 0

    //criar um laço de repetição de 1 até n
    for(let i = 0; i<= n; i++) {
            cont = cont + 1
            buraco  = buraco - v
            if(cont == v){
                v = v-1
            }            
    }
    if(n==buraco){
        resposta = "possivel"
    }
    else {
        resposta = "impossivel"
    }
   
    // alterara o conteúdo da tag pre
    resp.innerText = resposta;

})