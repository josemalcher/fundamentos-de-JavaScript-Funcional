function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('tempo');
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro');
            } else {
                resolve(valor)
            }
        } catch (e){
            reject(e);
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Error Esp.: ${err}`)
    )
    .then(()=> console.log('Quase fim!'))
    .catch(err=>console.log('ERRO GERAL: ${err}'))
    .then(()=> console.log('FIM'))