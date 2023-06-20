const calcularValorPedido = require('./calcular-valor-pedidos');

it('não deve cobrar o valor do frete quando o valor dos produtos for superior a 500', ()=>{

    //! AAA
    //* ARRANGE
    const meuPedido ={
        itens:[
            { nome: 'Arco Encantado', valor:2000},           
            { nome:'Entrega', valor: 100, entrega:true },
        ]
    }

    //*ACT
   const resultado = calcularValorPedido(meuPedido);

   //*ASSERT
   expect(resultado).toBe(2000)
});

it('deve cobrar valor de frete quando valor do produtos for menor que 500', ()=>{
    //ARRANGE
    const meuPedido ={
        itens:[
            { nome: 'Sanduíche de cogumelo', valor:50},           
            { nome:'Entrega', valor: 100, entrega:true },
        ]
    }
    //ACT
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT
    expect (resultado).toBe(150)
});

it('deve cobrar valor de frete quando valor do produtos for exatamente 500', ()=>{
    //ARRANGE
    const meuPedido ={
        itens:[
            { nome: 'Sanduíche magico', valor:500},           
            { nome:'Entrega', valor: 100, entrega:true },
        ]
    }
    //ACT
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT
    expect (resultado).toBe(600)
})