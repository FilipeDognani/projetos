const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./Imagens/festejando.png" alt = "Emoji Celebrando"/>'
const imgReprovado = '<img src="./Imagens/triste.jpg" alt = "Emoji Triste"/>'
const atividades = [];
const notas = [];


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualziaMediaFinal ()

});

function adicionaLinha(){

const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');

if(atividades.includes(inputNomeAtividade.value)){
    alert(`A Atividade: ${inputNomeAtividade.value} ja foi inserida`);
}else {

    
atividades.push(inputNomeAtividade.value)
notas.push(parseFloat(inputNotaAtividade.value));


let linha ='<tr>';
linha += `<td>${inputNomeAtividade.value}</td>`;
linha += `<td>${inputNotaAtividade.value}</td>`;
linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
linha += '</tr>';

linhas += linha;



inputNomeAtividade.value = '';
inputNotaAtividade.value = '';
}
}

function atualizaTabela(){
const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;
}

function atualziaMediaFinal (){
const mediaFinal = calculaMediaFinal();

document.getElementById('media-final-valor').innerHTML = mediaFinal;
document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? 'Aprovado': 'Reprovado';
}

function calculaMediaFinal(){

    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;


}