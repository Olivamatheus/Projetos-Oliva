
// Ativos Circulantes
const inputsAtvCirc = document.querySelectorAll(".atvcirc");
const arrayAtvCirc = [];

for (let i = 0; i < inputsAtvCirc.length; i++) {
    var inputAtvCirc = inputsAtvCirc[i];
    arrayAtvCirc.push({id:inputAtvCirc.id, value:0})
    inputAtvCirc.addEventListener('blur', (evt) => {

        const element = evt.target;
        var aux = {
            id:element.id,
            value:element.value
        }
        
        let indexArray = findArrayById(arrayAtvCirc, element.id);

        if (indexArray >= 0) {
            arrayAtvCirc[indexArray] = aux;
        } else {
            arrayAtvCirc.push(aux)   
        }
        calcAtvCirc(arrayAtvCirc);
    });
}

function calcAtvCirc(array) {
    var resatvcirc = 0;

    for (let i = 0; i < array.length; i++) {
        resatvcirc += Number(array[i].value)
    }
    document.getElementById('resatvcirc').textContent = resatvcirc;
    
}

// Ano
const inputAno = document.getElementById('ano_in').value;

function anoCal() {
    const anoout = ano_in;
    document.getElementById('ano_out').textContent = anoout;
}
console.log(anoCal());
document.getElementById('ano_in').addEventListener('blur', anoCal);

function findArrayById (array, id) {
    for (let i = 0; i < array.length; i++){
        if (array[i].id == id) {
            return i;
        }
    }
    return -1;
}

// Ativos Não Circulantes
const inputsAtvNaoCirc = document.querySelectorAll(".atvNaoCirc");
const arrayAtvNaoCirc = [];

for(let i = 0; i < inputsAtvNaoCirc.length; i++){
    var inputAtvNaoCirc = inputsAtvNaoCirc[i];
    arrayAtvNaoCirc.push({id:inputAtvNaoCirc.id, value:0})
    inputAtvNaoCirc.addEventListener('blur', (evt) =>{

        const element = evt.target;
        var aux = {
            id:element.id,
            value:element.value
        }
        let indexArray = findArrayById(arrayAtvNaoCirc, element.id);

        if (indexArray >= 0) {
            arrayAtvNaoCirc[indexArray] = aux;
        } else {
            arrayAtvNaoCirc.push(aux)   
        }
        calcAtvNaoCirc(arrayAtvNaoCirc);
    })
}

function calcAtvNaoCirc(array) {
    var resAtvNaoCirc = 0;
    for (let i = 0; i < array.length; i++) {
        resAtvNaoCirc += Number(array[i].value)
    }
    document.getElementById('resAtvNaoCirc').textContent = resAtvNaoCirc;  
}

// Total do Ativo
const inputsAtv = document.querySelectorAll(".atv");
const arrayAtv = [];

for(let i = 0; i < inputsAtv.length; i++){
    var inputAtv = inputsAtv[i];
    arrayAtv.push({id:inputAtv.id, value:0})
    inputAtv.addEventListener('blur', (evt) =>{

        const element = evt.target;
        var aux = {
            id:element.id,
            value:element.value
        }
        let indexArray = findArrayById(arrayAtv, element.id);

        if (indexArray >= 0) {
            arrayAtv[indexArray] = aux;
        } else {
            arrayAtv.push(aux)   
        }
        calcAtv(arrayAtv);
    })
}

function calcAtv(array) {
    var resAtv = 0;
    for (let i = 0; i < array.length; i++) {
        resAtv += Number(array[i].value)
    }
    document.getElementById('resTotAtv').textContent = resAtv; 
}

// Total Passivo
const inputsPass = document.querySelectorAll(".pass");
const arrayPass = [];

for(let i = 0; i < inputsPass.length; i++){
    var inputPass = inputsPass[i];
    arrayPass.push({id:inputPass.id, value:0})
    inputPass.addEventListener('blur', (evt) =>{

        const element = evt.target;
        var aux = {
            id:element.id,
            value:element.value
        }
        let indexArray = findArrayById(arrayPass, element.id);
        
        if (indexArray >= 0) {
            arrayPass[indexArray] = aux;
        } else {
            arrayPass.push(aux)   
        }
        calcPass(arrayPass);
    })
}

function calcPass(array) {
    var resPass = 0;
    for (let i = 0; i < array.length; i++) {
        resPass += Number(array[i].value)
    }
    document.getElementById('resPass').textContent = resPass;  
}


// Reservas
const inputReserv = document.querySelector(".capsoc").value;
    console.log(inputReserv);
function calcReserv () {
    
    var reserv = inputReserv * -1;

    document.getElementById('reserv').textContent = reserv;
}

calcReserv();
// Patrimonio Liquido = Ativo - Passivo; Reservas = (-) Capital Social