

function resultado(acao, valor) {
    
    if (acao === 'acao'){
        if(valor === 'C'){
            document.getElementById('resultado').value = '';
        }else if ((valor === '+') || (valor === '-') || (valor === 'X') || (valor === '/') || (valor === '.')){
            document.getElementById('resultado').value += valor;
        }if (valor ==='='){
            document.getElementById('resultado').value = eval(document.getElementById('resultado').value);
        }
        
    }else if(acao ==='valor'){
        document.getElementById('resultado').value += valor;
    }
    
}