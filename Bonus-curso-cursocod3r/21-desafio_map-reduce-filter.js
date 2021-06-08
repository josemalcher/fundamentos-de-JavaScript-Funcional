const carrinho = [
  {nome: 'caneta', qde: 10, preco: 1.99, fragil: false},
  {nome: 'Impressora', qde: 1, preco: 89.99, fragil: true},
  {nome: 'caderno', qde: 3, preco: 2.99, fragil: true},
  {nome: 'Lapis', qde: 100, preco: 1.9, fragil: false},
  {nome: 'Tesoura', qde: 30, preco: 2.99, fragil: true},
]

// filter, map, reduce

// 1. fragil: true
// 2. qde * preco 27.10 -> total
// 3. medida totais

const isfragil = item => item.fragil
const getTotal = item => item.qde * item.preco
const getMedia = (acc, el) => {
  const novaQtde  = acc.qde + 1
  const novoTotal = acc.total + el
  return {
    qde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde
  } 
}
const mediaInicial = {qde: 0, total: 0, media: 0}

const media = carrinho
                      .filter(isfragil)
                      .map(getTotal)
                      .reduce(getMedia, mediaInicial)
                      .media

console.log(`A média é ${media}`)