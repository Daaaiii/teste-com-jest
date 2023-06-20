const acrescimoValorEntrega = 0.2;


//? frete gratis para pedidos acima de 500

const calcularValorPedido = pedido =>{
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual)=> totalPedidos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);

    if(pedido.estado === 'RS'|| pedido.estado === 'SC'){
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
        entrega[0].valor += acrescimoEntrega;
    }
   
    return(valorProdutos>500)? valorProdutos: valorProdutos+ entrega[0].valor;

    // if(valorProdutos > 500){
    //     return valorProdutos;
    // }else {
    //     return valorProdutos + entrega[0].valor;
    // }

}
 
module.exports = calcularValorPedido;



//? Calculo sem incluir o valor do frete

// const calcularValorPedido = pedido =>
// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor,0)

// console.log(calcularValorPedido(meuPedido))