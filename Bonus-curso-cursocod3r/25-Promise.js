function esperandoPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('Executando promisse...')
      resolve()
    }, tempo)
  })
}

esperandoPor()
              .then(()=> esperandoPor())
              .then(esperandoPor)