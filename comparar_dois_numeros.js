function ComparaNumeros() {
    var n1 = Number(prompt('Digite o primeiro número:'));

    if (!n1) {
        alert('Você digitou um caracter não suportado.\nFavor digitar um número real inteiro.');
        ComparaNumeros();
    }
    
    var n2 = Number(prompt('Digite o segundo número:'));

    if (!n2) {
        alert('Você digitou um caracter não suportado.\nFavor digitar um número real inteiro.');
        ComparaNumeros();
    }ComparaNumeros

    var iguais = (n1 == n2) ? ['são iguais'] : ['não são iguais'];
    var dez = (n1+n2 > 10) ? ['é maior que dez'] : ['não é maior que dez'];
    var vinte = (n1+n2 < 20) ? ['é menor que vinte'] : ['não é menor que vinte'];

    alert(`Os números escolhidos foram ${n1} e ${n2}. Eles ${iguais}. Sua soma é igual a ${n1+n2}, que ${dez} e ${vinte}.`);
}

ComparaNumeros();