// script.js

// Salvar dados no sessionStorage

function saveData() {
 
    //saveData da pagina ETAPA1
    if (document.getElementById('nome')) {
        sessionStorage.setItem('nome', document.getElementById('nome').value);
    }
    if (document.getElementById('email')){
        sessionStorage.setItem('email', document.getElementById('email').value);
    }
    if (document.getElementById('endereco')){
        sessionStorage.setItem('endereco', document.getElementById('endereco').value);
    }
    if (document.getElementById('bairro')){
        sessionStorage.setItem('bairro', document.getElementById('bairro').value);
    }
    if (document.getElementById('cidade')){
        sessionStorage.setItem('cidade', document.getElementById('cidade').value);
    }
    if (document.getElementById('estado')){
        sessionStorage.setItem('estado', document.getElementById('estado').value);
    }
    if (document.getElementById('cep')){
        sessionStorage.setItem('cep', document.getElementById('cep').value);
    }
    if (document.getElementById('tel_res')){
        sessionStorage.setItem('tel_res', document.getElementById('tel_res').value);
    }
    if (document.getElementById('telefone')){
        sessionStorage.setItem('telefone', document.getElementById('telefone').value);
    }
    if (document.getElementById('tel_emergencia')){
        sessionStorage.setItem('tel_emergencia', document.getElementById('tel_emergencia').value);
    }
    if (document.getElementById('contato')){
        sessionStorage.setItem('contato', document.getElementById('contato').value);
    }
    if (document.getElementById('data_nascimento')){
        sessionStorage.setItem('data_nascimento', document.getElementById('data_nascimento').value);
    }
    if (document.getElementById('profissao')){
        sessionStorage.setItem('profissao', document.getElementById('profissao').value);
    }
}
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Captura os valores dos campos
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const endereco = document.querySelector('input[name="endereco"]').value;
    const bairro = document.querySelector('input[name="bairro"]').value;
    const cidade = document.querySelector('input[name="cidade"]').value;
    const estado = document.querySelector('input[name="estado"]').value;
    const cep = document.querySelector('input[name="cep"]').value;
    const tel_res = document.querySelector('input[name="tel_res"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const tel_emergencia = document.querySelector('input[name="tel_emergencia"]').value;
    const contato = document.querySelector('input[name="contato"]').value;
    const data_nascimento = document.querySelector('input[name="data_nascimento"]').value;
    const profissao = document.querySelector('input[name="profissao"]').value;

    // Envia os dados para o backend
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome,
            email,
            endereco,
            bairro,
            cidade,
            estado,
            cep,
            tel_res,
            telefone,
            tel_emergencia,
            contato,
            data_nascimento,
            profissao
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Formulário enviado com sucesso!');
        console.log(data);
    })
    .catch(error => {
        alert('Erro ao enviar os dados!');
        console.error('Erro:', error);
    });
});
// Avançar para a próxima etapa
function nextStep() {
    saveData();
    let nextPage = '';
 
    if (window.location.pathname.includes('etapa1')) {
        nextPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = '/etapa3';
    } else if (window.location.pathname.includes('etapa3')) {
        nextPage = '/etapa4'
    }else if (window.location.pathname.includes('etapa4')) {
        nextPage = '/etapa5'
    }
 
    if (nextPage) {
        window.location.href = nextPage;
    }
}
