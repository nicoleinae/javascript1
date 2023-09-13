const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //vetor global]

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = frm.inPaciente.value;

    pacientes.push(nome);
    console.log(pacientes);
    let lista = "";

    for(let i=0; i < pacientes.length; i++){
        lista += `${i + 1} . ${pacientes[i]}\n`;
    }
    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

frm.btnUrgencia.addEventListener("click", () => {
if (!frm.checkValidity()){
    alert("Informe o nome do paciente a ser atendido com urgência");
    frm.inPaciente.focus();
    return;
}

    const nome = frm.inPaciente.value;

    pacientes.unshift(nome);
    console.log(pacientes);
    let lista = "";

    pacientes.forEach((paciente, i) => {
        return (lista += `${i + 1} . ${pacientes[i]}\n`);
    })

    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

fm.btnAtender.addEventListener("click", () =>{
    if(pacientes.length == 0){
        alert("Não há pacientes para atender")
        frm.inPaciente.focus();
        return; 
    }

    const atender = pacientes.shift();
    respNome.innerText = atender;
    let lista = "";
    pacientes.forEach((pacientes, i) => (lista += `${i + 1} . ${pacientes[i]}\n`));
    respLista.innerText = lista;

})