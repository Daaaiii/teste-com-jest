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
});
//Caso os estado de entrega sejam RS ou SC , deve ser acrescido 20% no valor de entrega
it('deve adicionar 20% no valor da entrega caso o estado seja o RS',()=>{
    const pedidoComEstadoRS ={
        estado: 'RS',
        itens:[
            { nome: 'Sanduíche magico', valor:500},           
            { nome:'Entrega', valor: 100, entrega:true },
        ]

    };
    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620)
});

it('deve adicionar 20% no valor da entrega caso o estado seja o SC',()=>{
    const pedidoComEstadoSC ={
        estado: 'SC',
        itens:[
            { nome: 'Sanduíche magico', valor:500},           
            { nome:'Entrega', valor: 100, entrega:true },
        ]

    };
    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620)
});
it('não deve adicionar 20% no valor da entrega caso o estado seja o SP',()=>{
    const pedidoComEstadoSP ={
        estado: 'SP',
        itens:[
            { nome: 'Sanduíche magico', valor:500},           
            { nome:'Entrega', valor: 100, entrega:true },
        ]

    };
    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600)
});