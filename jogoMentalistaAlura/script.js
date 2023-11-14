var numeroSecreto = parseInt(Math.random() * 1001);

while (numeroSecreto != tentativa){
    var tentativa = prompt('Digite um número entre 1 e 1000');

    if (numeroSecreto == tentativa){
        alert('Parabéns, você acertou')
    }
    else if (tentativa > numeroSecreto){
        alert('Que pena, você errou!')
        alert('O número certo é menor que o digitado!')
    } else if (tentativa < numeroSecreto){
        alert('Que pena, você errou!')
        alert('O número certo é maior que o digitado!') 
    }    
}