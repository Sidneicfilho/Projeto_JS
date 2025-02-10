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

    // Validação dos campos obrigatórios
    if (!nome || !email || !endereco || !bairro || !cidade || !estado || !cep || !tel_res || !telefone || !tel_emergencia || !contato || !data_nascimento || !profissao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Envia os dados para o backend
    fetch('/submit-etapa1', {
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
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados.');
        }
        return response.json();
    })
    .then(data => {
        // Armazena o id_cliente no sessionStorage
        sessionStorage.setItem('id_cliente', data.id_cliente);
        alert('Dados da Etapa1 salvos com sucesso!');
        console.log('ID do cliente:', data.id_cliente);
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

function showResumo1() {
    const idCliente = sessionStorage.getItem('id_cliente') || "Não informado";
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const bairro = sessionStorage.getItem('bairro') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";
    const estado = sessionStorage.getItem('estado') || "Não informado";
    const cep = sessionStorage.getItem('cep') || "Não informado";
    const telRes = sessionStorage.getItem('tel_res') || "Não informado";
    const telefone = sessionStorage.getItem('telefone') || "Não informado";
    const telEmergencia = sessionStorage.getItem('tel_emergencia') || "Não informado";
    const contato = sessionStorage.getItem('contato') || "Não informado";
    const dataNascimento = sessionStorage.getItem('data_nascimento') || "Não informado";
    const profissao = sessionStorage.getItem('profissao') || "Não informado";

    const resumo1 = `
        <p><strong>ID Cliente:</strong> ${idCliente}</p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Bairro:</strong> ${bairro}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Estado:</strong> ${estado}</p>
        <p><strong>CEP:</strong> ${cep}</p>
        <p><strong>Telefone Residencial:</strong> ${telRes}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Telefone de Emergência:</strong> ${telEmergencia}</p>
        <p><strong>Contato:</strong> ${contato}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
        <p><strong>Profissão:</strong> ${profissao}</p>
    `;

    const resumoDiv = document.getElementById('resumo1');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo1;
    }
}
