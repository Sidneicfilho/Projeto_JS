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

// Voltar para a etapa anterior
function previousStep() {
    
    saveData();
    let prevPage = '';

    if (window.location.pathname.includes('etapa3')) {
        prevPage = '/etapa2'; // Verifique se /etapa2 renderiza corretamente
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = '/etapa1'; // Verifique se /etapa1 renderiza corretamente
    }

    if (prevPage) {
        window.location.href = prevPage;
    }
}


//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa7')) {
    showResumo();
}

// Enviar o formulário (por exemplo, para um backend)
// Enviar os dados coletados para o backend
function submitForm() {
    // Coleta os dados do sessionStorage
    const nome = sessionStorage.getItem('nome');
    const email = sessionStorage.getItem('email');
    const endereco = sessionStorage.getItem('endereco');
    const bairro = sessionStorage.getItem('bairro');
    const cidade = sessionStorage.getItem('cidade');
    const estado = sessionStorage.getItem('estado');
    const cep = sessionStorage.getItem('cep');
    const tel_res = sessionStorage.getItem('tel_res');
    const telefone = sessionStorage.getItem('telefone');
    const tel_emergencia = sessionStorage.getItem('tel_emergencia');
    const contato = sessionStorage.getItem('contato');
    const data_nascimento = sessionStorage.getItem('data_nascimento');
    const profissao = sessionStorage.getItem('profissao');

    // Verifica se os dados necessários estão presentes
    if (!nome || !email || !endereco || !bairro || !cidade || !estado || !cep || !tel_res || !telefone || !tel_emergencia || !contato || !data_nascimento || !profissao) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    // Envia os dados para o backend via fetch
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
    .then(response => response.text())
    .then(data => {
        alert('Formulário enviado com sucesso!');
        console.log(data);  // Aqui você pode logar ou tratar a resposta do servidor
    })
    .catch(error => {
        alert('Erro ao enviar os dados!');
        console.error('Erro:', error);
    });
}


// Mostrar resumo apenas na etapa 7
if (window.location.pathname.includes('etapa7')) {
    showResumo();
}

// Preencher os campos com os dados salvos no sessionStorage quando voltar para uma etapa
function populateForm() {
    if (document.getElementById('nome')) {
        document.getElementById('nome').value = sessionStorage.getItem('nome') || '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = sessionStorage.getItem('email') || '';
    }
    if (document.getElementById('endereco')) {
        document.getElementById('endereco').value = sessionStorage.getItem('endereco') || '';
    }
    if (document.getElementById('cidade')) {
        document.getElementById('cidade').value = sessionStorage.getItem('cidade') || '';
    }
}

// Preencher os campos ao carregar a página
window.onload = populateForm;