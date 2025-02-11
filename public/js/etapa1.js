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
        // Armazena os dados no sessionStorage
        sessionStorage.setItem('id_cliente', data.id_cliente);
        sessionStorage.setItem('nome', nome);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('endereco', endereco);
        sessionStorage.setItem('bairro', bairro);
        sessionStorage.setItem('cidade', cidade);
        sessionStorage.setItem('estado', estado);
        sessionStorage.setItem('cep', cep);
        sessionStorage.setItem('tel_res', tel_res);
        sessionStorage.setItem('telefone', telefone);
        sessionStorage.setItem('tel_emergencia', tel_emergencia);
        sessionStorage.setItem('contato', contato);
        sessionStorage.setItem('data_nascimento', data_nascimento);
        sessionStorage.setItem('profissao', profissao);

        alert('Dados da Etapa1 salvos com sucesso!');
        console.log('ID do cliente:', data.id_cliente);
        window.location.href = "/etapa2";
    })
    .catch(error => {
        alert('Erro ao enviar os dados!');
        console.error('Erro:', error);
    });
});

