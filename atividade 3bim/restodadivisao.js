//obter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter número informado
    const x = Number(frm.inx.value);
    const y = Number(frm.iny.value);

    let resposta = ""
 
    //criar um laço de repetição
    for(let i = x; i< y; i++) {
            if(i%5 == 2 || i%5 == 3){
                resposta = resposta + i + "\n";
            }            
    }
   
    // alterara o conteúdo da tag pre
    resp.innerText = resposta;

})