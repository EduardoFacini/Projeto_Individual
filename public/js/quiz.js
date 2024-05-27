var respostasCorretas = ['a', 'a', 'd', 'b', 'c', 'c', 'b', 'a', 'a', 'd'];
var respostasUsuario = [];
var perguntaAtual = 1;
var pontuacao = 0;

function proximaPergunta() {
    var radios = document.getElementsByName('q' + perguntaAtual);
    var respostaUsuario = null;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            respostaUsuario = radios[i].value;
            break;
        }
    }

    if (respostaUsuario !== null) {
        respostasUsuario.push(respostaUsuario);
        document.getElementById('pergunta-' + perguntaAtual).style.display = 'none';
        perguntaAtual++;

        if (perguntaAtual <= 10) {
            document.getElementById('pergunta-' + perguntaAtual).style.display = 'block';
        } 
        else {
            calcularPontuacao();
            document.getElementById('next-button').style.display = 'none';  
            document.getElementById('reiniciar').style.display = 'block';
            document.getElementById('sair').style.display = 'block';
        }
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function calcularPontuacao() {
    for (var i = 0; i < respostasCorretas.length; i++) {
        if (respostasUsuario[i] === respostasCorretas[i]) {
            pontuacao += 10;
        }
    }

    document.getElementById('score-value').textContent = pontuacao;
    document.getElementById('score').style.display = 'block';
}

function sair() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var pontuacaoVar = pontuacao;
    var idUserVar = sessionStorage.ID_USUARIO;

    // Enviando o valor da nova input
    fetch("/quizRota/cadastrarResultado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        pontosServer: pontuacaoVar,
        idUserServer: idUserVar
      }),
    })

    setTimeout(() => {
        window.location = "dashboard/dashboard.html";
    }, "1000");
    
    return false;
}



