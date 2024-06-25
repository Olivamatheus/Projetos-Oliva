
const calcular = document.getElementById('calcular');

function deprec () {
    const ca = document.getElementById('custatv').value;
    const vr = document.getElementById('vlresd').value;
    const anos = document.getElementById('anos').value;
    const meses = document.getElementById('meses').value;
    const tx = document.getElementById('txdep').value;
    const res = document.getElementById('res');
    var stg = '';

    if (ca !== '' && vr !== '' && tx !== '') {
        let deprecanual = ((ca - vr) * tx / 100);
        if (anos !== '') {
            deprecanual = ((ca - vr)/anos);
            let vlrcon = (ca - deprecanual);
            if (meses !== '') {
                const deprecmen = (deprecanual / 12);
                vlrcon = (ca - (deprecmen * meses));
                stg += `O valor da depreciação acumulada mensal é de: R$${deprecmen}.\n`
            }
        stg += `O valor da depreciação acumulada anual é de: R$${deprecanual}.\n`
        stg += `O valor contábil líquido é de: R$${vlrcon}.`
        res.textContent = stg;
        }
    }
}
