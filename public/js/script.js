

//Etapa4
const checkboxes = [
    "Flexivel_D", "Flexivel_E", 
    "Rigido_D", "Rigido_E", 
    "Espalmado_D", "Espalmado_E", 
    "Martelo_D", "Martelo_E", 
    "Queda_Metatarso_D", "Queda_Metatarso_E"
];


    checkboxes.forEach(name => {
        const checkbox = document.querySelector(`input[name="${name}"]`);
        if (checkbox) {
            sessionStorage.setItem(name, checkbox.checked);
        }
    });
    console.log("Dados salvos no sessionStorage!");
}

function loadData() {
    checkboxes.forEach(name => {
        const checkbox = document.querySelector(`input[name="${name}"]`);
        const savedValue = sessionStorage.getItem(name);

        if (checkbox && savedValue !== null) {
            checkbox.checked = savedValue === "true";
        }
    });
    console.log("Dados carregados do sessionStorage!");
}


if (document.getElementById('Tipo_Marcha')) {
    sessionStorage.setItem('Tipo_Marcha', document.getElementById('Tipo_Marcha').value);
}

if (document.getElementById('Marcha_Descricao')) {
    sessionStorage.setItem('Marcha_Descricao', document.getElementById('Marcha_Descricao').value);
}

if (document.getElementById('Joelho')) {
    sessionStorage.setItem('Joelho', document.getElementById('Joelho').value);
}

if (document.getElementById('Articulacao')) {
    sessionStorage.setItem('Articulacao', document.getElementById('Articulacao').value);
}

if (document.getElementById('Sensibilidade_Dor')) {
    sessionStorage.setItem('Sensibilidade_Dor', document.getElementById('Sensibilidade_Dor').value);
}

if (document.getElementById('id_cliente')) {
    sessionStorage.setItem('id_cliente', document.getElementById('id_cliente').value);
}


// Submission function
function submitEtapa3Data() {
    // Create etapa3Data object from sessionStorage
    const etapa3Data = {
        Osteoporose: sessionStorage.getItem('Osteoporose'),
        Renal: sessionStorage.getItem('Renal'),
        Epilepsia: sessionStorage.getItem('Epilepsia'),
        Quimioterapia_Radioterapia: sessionStorage.getItem('Quimioterapia_Radioterapia'),
        Hipotireoidismo: sessionStorage.getItem('Hipotireoidismo'),
        Hepatite: sessionStorage.getItem('Hepatite'),
        Antecedente_Oncologico: sessionStorage.getItem('Antecedente_Oncologico'),
        Cardiopatia: sessionStorage.getItem('Cardiopatia'),
        Hipertensao: sessionStorage.getItem('Hipertensao'),
        Reumatismo: sessionStorage.getItem('Reumatismo'),
        Hanseniase: sessionStorage.getItem('Hanseniase'),
        Cirurgia_MMII: sessionStorage.getItem('Cirurgia_MMII'),
        Marca_Passo: sessionStorage.getItem('Marca_Passo'),
        Hipotensao: sessionStorage.getItem('Hipotensao'),
        Insulina: sessionStorage.getItem('Insulina'),
        Dieta_Hidrica: sessionStorage.getItem('Dieta_Hidrica'),
        Injetavel: sessionStorage.getItem('Injetavel'),
        Dieta_Alimentar: sessionStorage.getItem('Dieta_Alimentar'),
        Via_Oral: sessionStorage.getItem('Via_Oral'),
        Taxa_Glicemica: parseFloat(sessionStorage.getItem('Taxa_Glicemica')), // Converte para número
        Alteracoes_Vasculares: sessionStorage.getItem('Alteracoes_Vasculares'),
        id_cliente: sessionStorage.getItem('id_cliente') // Certifique-se de que isso está definido
    };

    // Log the data for debugging
    console.log('Submitting Etapa3 Data:', etapa3Data);

    // Submit data to Sequelize
    Etapa3.create(etapa3Data)
        .then(result => {
            console.log('Data inserted successfully:', result);

            // Clear session storage after successful submission
            Object.keys(etapa3Data).forEach(key => {
                if (key !== 'id_cliente') {
                    sessionStorage.removeItem(key);
                }
            });

            // Redirect or show success message
            window.location.href = '/next-step'; // Adjust as needed
        })
        .catch(error => {
            console.error('Error inserting data:', error);
            if (error.errors) {
                error.errors.forEach(err => {
                    console.error(`${err.path}: ${err.message}`);
                });
            }
            alert('Erro ao salvar dados. Por favor, verifique as informações e tente novamente.');
        });
}
          
          // Attach to form submission if needed
          document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            submitEtapa3Data(); // Call our custom submission function
          });

          
   
    //etapa4
   // Função para armazenar os dados da Etapa 4 na sessionStorage
function saveEtapa4Data() {
    // Campos adicionais para armazenamento na sessionStorage para a Etapa 4
    const fields = [
        'Flexível_E', 'Rígido_D', 'Rígido_E', 'Espalmado_D', 'Espalmado_E', 
        'Martelo_D', 'Martelo_E', 'Queda_Metatarso_D', 'Queda_Metatarso_E', 
        'Tipo_Marcha', 'Marcha_Descricao', 'Joelho', 'Articulacao', 'Sensibilidade_Dor'
    ];

    // Itera sobre os campos e armazena o valor correspondente na sessionStorage
    fields.forEach(field => {
        const element = document.querySelector(`input[name="${field}"]:checked`);
        if (element) {
            sessionStorage.setItem(field, element.value); // Para booleanos ou ENUM
        } else {
            // Para o campo de descrição (textos ou casos de não seleção)
            const textElement = document.querySelector(`input[name="${field}"]`);
            if (textElement) {
                sessionStorage.setItem(field, textElement.value); // Caso tenha um campo de texto como descrição
            }
        }
    });

    // Armazenando o id_cliente
    const idCliente = document.querySelector('input[name="id_cliente"]').value;
    sessionStorage.setItem('id_cliente', idCliente);
}

// Função de submissão para a Etapa 4
function submitEtapa4Data() {
    // Criação do objeto com os dados a serem enviados para a Etapa 4
    const etapa4Data = {
        Flexível_E: sessionStorage.getItem('Flexível_E'),
        Rígido_D: sessionStorage.getItem('Rígido_D'),
        Rígido_E: sessionStorage.getItem('Rígido_E'),
        Espalmado_D: sessionStorage.getItem('Espalmado_D'),
        Espalmado_E: sessionStorage.getItem('Espalmado_E'),
        Martelo_D: sessionStorage.getItem('Martelo_D'),
        Martelo_E: sessionStorage.getItem('Martelo_E'),
        Queda_Metatarso_D: sessionStorage.getItem('Queda_Metatarso_D'),
        Queda_Metatarso_E: sessionStorage.getItem('Queda_Metatarso_E'),
        Tipo_Marcha: sessionStorage.getItem('Tipo_Marcha'),
        Marcha_Descricao: sessionStorage.getItem('Marcha_Descricao'),
        Joelho: sessionStorage.getItem('Joelho'),
        Articulacao: sessionStorage.getItem('Articulacao'),
        Sensibilidade_Dor: sessionStorage.getItem('Sensibilidade_Dor'),
        id_cliente: sessionStorage.getItem('id_cliente') // Certifique-se de que o id_cliente está corretamente salvo
    };

    // Log para depuração
    console.log('Submitting Etapa4 Data:', etapa4Data);

    // Envia os dados para o Sequelize (ajuste conforme necessário)
    Etapa4.create(etapa4Data)
        .then(result => {
            console.log('Data inserted successfully:', result);

            // Limpa o sessionStorage após a submissão bem-sucedida
            Object.keys(etapa4Data).forEach(key => {
                if (key !== 'id_cliente') {
                    sessionStorage.removeItem(key);
                }
            });

            // Redireciona ou exibe mensagem de sucesso
            window.location.href = '/next-step'; // Ajuste conforme necessário
        })
        .catch(error => {
            console.error('Error inserting data:', error);
            if (error.errors) {
                error.errors.forEach(err => {
                    console.error(`${err.path}: ${err.message}`);
                });
            }
            alert('Erro ao salvar dados. Por favor, verifique as informações e tente novamente.');
        });
}

// Atachando a função de submissão ao evento de envio do formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    saveEtapa4Data();         // Salva os dados no sessionStorage
    submitEtapa4Data();       // Chama a função de submissão personalizada para Etapa 4
});


    //saveData ETAPA4

    // Coletando dados dos checkboxes e armazenando no sessionStorage
// Tipo de Pisada (single selection)
const tipoPisada = document.querySelector('input[name="Tipo_Pisada"]:checked')?.value || '';
if (tipoPisada) {
    sessionStorage.setItem('tipo_pisada', JSON.stringify(tipoPisada));
}

// Flexível (single selection)
const Flexivel_D = document.querySelector('input[name="Flexivel_D"]:checked')?.value || '';
if (flexivel) {
    sessionStorage.setItem('flexivel', JSON.stringify(flexivel));
}

const Flexivel_E = document.querySelector('input[name="Flexivel_E"]:checked')?.value || '';
if (flexivel) {
    sessionStorage.setItem('flexivel', JSON.stringify(flexivel));
}

// Similar pattern for other radio button groups:
const Rigido_D = document.querySelector('input[name="Rigido_D"]:checked')?.value || '';
if (rigido) {
    sessionStorage.setItem('rigido', JSON.stringify(rigido));
}

const Rigido_E = document.querySelector('input[name="Rigido_E"]:checked')?.value || '';
if (rigido) {
    sessionStorage.setItem('rigido', JSON.stringify(rigido));
}

const Espalmado_D = document.querySelector('input[name="Espalmado_D"]:checked')?.value || '';
if (espalmado) {
    sessionStorage.setItem('espalmado', JSON.stringify(espalmado));
}

const Espalmado_E = document.querySelector('input[name="Espalmado_E"]:checked')?.value || '';
if (espalmado) {
    sessionStorage.setItem('espalmado', JSON.stringify(espalmado));
}

const Martelo_D = document.querySelector('input[name="Martelo_D"]:checked')?.value || '';
if (martelo) {
    sessionStorage.setItem('martelo', JSON.stringify(martelo));
}

const Martelo_E = document.querySelector('input[name="Martelo_D"]:checked')?.value || '';
if (martelo) {
    sessionStorage.setItem('martelo', JSON.stringify(martelo));
}

const Queda_Metatarso_D = document.querySelector('input[name="Queda_Metatarso_D"]:checked')?.value || '';
if (quedaMetatarso) {
    sessionStorage.setItem('queda_metatarso', JSON.stringify(quedaMetatarso));
}

const Queda_Metatarso_E = document.querySelector('input[name="Queda_Metatarso_E"]:checked')?.value || '';
if (quedaMetatarso) {
    sessionStorage.setItem('queda_metatarso', JSON.stringify(quedaMetatarso));
}

const tipoMarcha = document.querySelector('input[name="Tipo_Marcha"]:checked')?.value || '';
if (tipoMarcha) {
    sessionStorage.setItem('tipo_marcha', JSON.stringify(tipoMarcha));
}

const qualMarcha = document.getElementById('inputText')?.value || '';
if (qualMarcha) {
    sessionStorage.setItem('qual_marcha', qualMarcha);
}

const joelho = document.querySelector('input[name="Joelho"]:checked')?.value || '';
if (joelho) {
    sessionStorage.setItem('joelho', JSON.stringify(joelho));
}

const articulacao = document.querySelector('input[name="Articulacao"]:checked')?.value || '';
if (articulacao) {
    sessionStorage.setItem('articulacao', JSON.stringify(articulacao));
}

const sensibilidade = document.querySelector('input[name="Sensibilidade_Dor"]:checked')?.value || '';
if (sensibilidade) {
    sessionStorage.setItem('sensibilidade', JSON.stringify(sensibilidade));
}






document.getElementById('formulario_boolean').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio padrão do formulário

    // Captura os valores dos checkboxes de tipo de pisada
    const tipoPisada = sessionStorage.from(document.querySelectorAll('input[name="tipo_pisada[]"]:checked'))
        .map(checkbox => checkbox.value);

    // Captura os valores dos checkboxes de Flexível
    const flexivel_E = sessionStorage.from(document.querySelectorAll('input[name="flexivel[]"]:checked'))
        .map(checkbox => checkbox.value);
    const flexivel_D = sessionStorage.from(document.querySelectorAll('input[name="flexivel[]"]:checked'))
        .map(checkbox => checkbox.value);

    // Captura os valores dos checkboxes de Rígido
    const rigido_E= sessionStorage.from(document.querySelectorAll('input[name="rigido[]"]:checked'))
        .map(checkbox => checkbox.value);
    const rigido_D= sessionStorage.from(document.querySelectorAll('input[name="rigido[]"]:checked'))
        .map(checkbox => checkbox.value);


    // Captura os valores dos checkboxes de Espalmado
    const espalmado_E = sessionStorage.from(document.querySelectorAll('input[name="espalmado[]"]:checked'))
        .map(checkbox => checkbox.value);
    const espalmado_D = sessionStorage.from(document.querySelectorAll('input[name="espalmado[]"]:checked'))
        .map(checkbox => checkbox.value);


    // Captura os valores dos checkboxes de Martelo
    const martelo_E = sessionStorage.from(document.querySelectorAll('input[name="martelo[]"]:checked'))
        .map(checkbox => checkbox.value);
    const martelo_D = sessionStorage.from(document.querySelectorAll('input[name="martelo[]"]:checked'))
        .map(checkbox => checkbox.value);

    // Captura os valores dos checkboxes de Queda de Metatarso
    const quedaMetatarso_E = sessionStorage.from(document.querySelectorAll('input[name="queda_metatarso[]"]:checked'))
        .map(checkbox => checkbox.value);
    const quedaMetatarso_D = sessionStorage.from(document.querySelectorAll('input[name="queda_metatarso[]"]:checked'))
        .map(checkbox => checkbox.value);

    // Aqui você tem todos os valores selecionados, agora pode enviar para o backend
    fetch('/etapa4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tipoPisada: tipoPisada,
            flexivel_E: flexivel_E,
            flexivel_D: flexivel_D,
            rigido_E: rigido_E,
            rigido_D: rigido_D,
            espalmado_E: espalmado_E,
            espalmado_D: espalmado_D,
            martelo_E: martelo_E,
            martelo_D: martelo_D,
            quedaMetatarso_E: quedaMetatarso_E,
            quedaMetatarso_D: quedaMetatarso_D
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});

// Função para enviar os dados da etapa 4
function submitEtapa4Data() {
    const etapa4Data = {
        tipo_pisada: JSON.parse(sessionStorage.getItem('tipo_pisada')),
        flexivel: JSON.parse(sessionStorage.getItem('flexivel')),
        rigido: JSON.parse(sessionStorage.getItem('rigido')),
        espalmado: JSON.parse(sessionStorage.getItem('espalmado')),
        martelo: JSON.parse(sessionStorage.getItem('martelo')),
        queda_metatarso: JSON.parse(sessionStorage.getItem('queda_metatarso')),
        tipo_marcha: JSON.parse(sessionStorage.getItem('tipo_marcha')),
        qual_marcha: sessionStorage.getItem('qual_marcha'),
        joelho: JSON.parse(sessionStorage.getItem('joelho')),
        articulacao: JSON.parse(sessionStorage.getItem('articulacao')),
        sensibilidade: JSON.parse(sessionStorage.getItem('sensibilidade')),
        id_cliente: sessionStorage.getItem('id_cliente') // Certifique-se de que isso está definido
    };

    // Enviar os dados (por exemplo, para o backend)
    console.log('Dados da Etapa 4:', etapa4Data);

    // Aqui você pode enviar os dados para o backend via AJAX ou outro método
}

 
    // Ao clicar em "Enviar", imprime os dados salvos e envia ao backend
    submitButton.addEventListener('click', () => {
      // Recupera os dados salvos
      const data = JSON.parse(sessionStorage.getItem('avaliacao')) || {};
 
      // Verifica os dados antes de enviar
      console.log('Dados a serem enviados:', data);
 
      // Aqui você pode enviar os dados ao backend usando fetch:
      fetch('/salvar-avaliacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((result) => alert(result))
        .catch((error) => console.error('Erro ao enviar:', error));
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
 
// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";
   
    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo;
    }
}
//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}
 
// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor
}
 
// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
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
    if (document.getElementById('estado')) {
        document.getElementById('estado').value = sessionStorage.getItem('estado') || '';
    }
}


//ETAPA 5 
function saveData() {
    // Salvar formatos das unhas
    const nailCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="unha_"]:checked');
    const nailValues = Array.from(nailCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('formato_unhas', nailValues);

    // Salvar artelhos PD
    const pdCheckboxes = document.querySelectorAll('input[id$="_pd"]:checked');
    const pdValues = Array.from(pdCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('artelhos_pd', pdValues);

    // Salvar artelhos PE
    const peCheckboxes = document.querySelectorAll('input[id$="_pe"]:checked');
    const peValues = Array.from(peCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('artelhos_pe', peValues);

    // Salvar alterações ungueais
    const alteracoesIds = [
        'onicoatrofia', 'onicocriptose', 'onicorrexe', 'granuloma', 'onicogrifose',
        'onicolise', 'onicofose', 'psoriase_ungueal', 'onicomicose'
    ];
    const alteracoes = alteracoesIds
        .filter(id => document.getElementById(id)?.checked)
        .map(id => document.getElementById(id).value)
        .join(', ');
    sessionStorage.setItem('alteracoes_ungueais', alteracoes);

    // Salvar campo de texto "outras alterações"
    const outros = document.getElementById('outros_alteracoes')?.value || '';
    sessionStorage.setItem('outras_alteracoes', outros);
}

function clearForm() {
    // Limpar checkboxes das unhas
    const nailCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="unha_"]');
    nailCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes dos artelhos
    const artelhosCheckboxes = document.querySelectorAll('input[id$="_pd"], input[id$="_pe"]');
    artelhosCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes das alterações ungueais
    const alteracoesIds = [
        'onicoatrofia', 'onicocriptose', 'onicorrexe', 'granuloma', 'onicogrifose',
        'onicolise', 'onicofose', 'psoriase_ungueal', 'onicomicose'
    ];
    alteracoesIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) checkbox.checked = false;
    });

    // Limpar campo de texto "outras alterações"
    const outros = document.getElementById('outros_alteracoes');
    if (outros) outros.value = '';
}

function saveData() {
    // Salvar alterações e lesões
    const lesionCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="bromidrose"]:checked');
    const lesionValues = Array.from(lesionCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('alteracoes_lesoes', lesionValues);

    // Salvar perfusão PD
    const pdCheckboxes = document.querySelectorAll('input[name$="_pd"]:checked');
    const pdValues = Array.from(pdCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('perfusao_pd', pdValues);

    // Salvar perfusão PE
    const peCheckboxes = document.querySelectorAll('input[name$="_pe"]:checked');
    const peValues = Array.from(peCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('perfusao_pe', peValues);

    // Salvar pergunta sobre erisipela
    const erisipelaRadio = document.querySelector('input[name="erisipela"]:checked');
    const erisipelaValue = erisipelaRadio ? erisipelaRadio.value : '';
    sessionStorage.setItem('erisipela', erisipelaValue);

    // Salvar campo de texto "outras alterações na pele"
    const outrasAlteracoes = document.getElementById('outras_alteracoes_pele')?.value || '';
    sessionStorage.setItem('outras_alteracoes_pele', outrasAlteracoes);

    // Salvar campo de texto "outros comentários"
    const outrosComentarios = document.getElementById('outros_comentarios')?.value || '';
    sessionStorage.setItem('outros_comentarios', outrosComentarios);
}

function clearForm() {
    // Limpar checkboxes das lesões
    const lesionCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="bromidrose"]');
    lesionCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes de perfusão PD
    const pdCheckboxes = document.querySelectorAll('input[name$="_pd"]');
    pdCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes de perfusão PE
    const peCheckboxes = document.querySelectorAll('input[name$="_pe"]');
    peCheckboxes.forEach(cb => cb.checked = false);

    // Limpar radio buttons da pergunta de erisipela
    const erisipelaRadios = document.querySelectorAll('input[name="erisipela"]');
    erisipelaRadios.forEach(radio => radio.checked = false);

    // Limpar campo de texto "outras alterações na pele"
    const outrasAlteracoes = document.getElementById('outras_alteracoes_pele');
    if (outrasAlteracoes) outrasAlteracoes.value = '';

    // Limpar campo de texto "outros comentários"
    const outrosComentarios = document.getElementById('outros_comentarios');
    if (outrosComentarios) outrosComentarios.value = '';
}

// Avançar para a próxima etapa


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

// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";
    
    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo;
    }
}
//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor
}

// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
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


 //saveData ETAPA3
 if (document.querySelector('input[name="osteoporose"]:checked')) {
    sessionStorage.setItem('osteoporose', document.querySelector('input[name="osteoporose"]:checked').value);
}
if (document.querySelector('input[name="renal"]:checked')) {
    sessionStorage.setItem('renal', document.querySelector('input[name="renal"]:checked').value);
}
if (document.querySelector('input[name="epilepsia"]:checked')) {
    sessionStorage.setItem('epilepsia', document.querySelector('input[name="epilepsia"]:checked').value);
}
if (document.querySelector('input[name="hipotiroidismo"]:checked')) {
    sessionStorage.setItem('hipotiroidismo', document.querySelector('input[name="hipotiroidismo"]:checked').value);
}
if (document.querySelector('input[name="hepatite"]:checked')) {
    sessionStorage.setItem('hepatite', document.querySelector('input[name="hepatite"]:checked').value);
}
if (document.querySelector('input[name="cardiopatia"]:checked')) {
    sessionStorage.setItem('cardiopatia', document.querySelector('input[name="cardiopatia"]:checked').value);
}
if (document.querySelector('input[name="hipertensao"]:checked')) {
    sessionStorage.setItem('hipertensao', document.querySelector('input[name="hipertensao"]:checked').value);
}  
if (document.querySelector('input[name="reumatismo"]:checked')) {
    sessionStorage.setItem('reumatismo', document.querySelector('input[name="reumatismo"]:checked').value);
}
if (document.querySelector('input[name="quimioRadio"]:checked')) {
    sessionStorage.setItem('quimioRadio', document.querySelector('input[name="quimioRadio"]:checked').value);
}      
if (document.querySelector('input[name="hanseniase"]:checked')) {
    sessionStorage.setItem('hanseniase', document.querySelector('input[name="hanseniase"]:checked').value);
}    
if (document.querySelector('input[name="oncologico"]:checked')) {
    sessionStorage.setItem('oncologico', document.querySelector('input[name="oncologico"]:checked').value);
}
if (document.querySelector('input[name="cirurgia_mmii"]:checked')) {
    sessionStorage.setItem('cirurgia_mmii', document.querySelector('input[name="cirurgia_mmii"]:checked').value);
}  
if (document.querySelector('input[name="marca_passo"]:checked')) {
    sessionStorage.setItem('marca_passo', document.querySelector('input[name="marca_passo"]:checked').value);
}        
if (document.querySelector('input[name="alteracoes"]:checked')) {
    sessionStorage.setItem('alteracoes', document.querySelector('input[name="alteracoes"]:checked').value);
}            
if (document.querySelector('input[name="hipotensao"]:checked')) {
    sessionStorage.setItem('hipotensao', document.querySelector('input[name="hipotensao"]:checked').value);
}    
if (document.querySelector('input[name="insulina"]:checked')) {
    sessionStorage.setItem('insulina', document.querySelector('input[name="insulina"]:checked').value);
}  
if (document.querySelector('input[name="dieta_hidrica"]:checked')) {
    sessionStorage.setItem('dieta_hidrica', document.querySelector('input[name="dieta_hidrica"]:checked').value);
}
if (document.getElementById('injetavel')) {
    sessionStorage.setItem('injetavel', document.getElementById('injetavel').value);
}
if (document.getElementById('dieta_alimentar')) {
    sessionStorage.setItem('dieta_alimentar', document.getElementById('dieta_alimentar').value);
}
if (document.getElementById('via_oral')) {
    sessionStorage.setItem('via_oral', document.getElementById('via_oral').value);
}
if (document.getElementById('taxa_glicemica')) {
    sessionStorage.setItem('taxa_glicemica', document.getElementById('taxa_glicemica').value);
}

//saveData2

const camposCheckbox = [
    'frequenta_podologo', 'uso_medicamentos', 'alergico', 'posicao_trabalho',
    'tempo_em_pe', 'tempo_sentado', 'tempo_caminhando', 'tipo_calcado_diario',
    'tipo_calcado_qual', 'fumante', 'ciclo_menstruacao_regular', 'gestante',
    'amamentando', 'pratica_atividade_fisica'
];

const camposTexto = [
    'queixa_principal', 'frequencia_podologo', 'quais_medicamentos',
    'quais_substancias', 'duracao_trabalho', 'numero_calcado',
    'frequencia_atividade_fisica', 'esporte_atividade', 'tipo_calcado_esporte'
];

const camposData = ['dum'];

// Salvar valores dos inputs do tipo "radio" ou "checkbox"
camposCheckbox.forEach(campo => {
    const elementoSelecionado = document.querySelector(`input[name="${campo}"]:checked`);
    if (elementoSelecionado) {
        sessionStorage.setItem(campo, elementoSelecionado.value);
    }
});

// Salvar valores dos inputs do tipo "text"
camposTexto.forEach(campo => {
    const elemento = document.getElementById(campo);
    if (elemento) {
        sessionStorage.setItem(campo, elemento.value);
    }
});

// Salvar valores dos inputs do tipo "date"
camposData.forEach(campo => {
    const elemento = document.getElementById(campo);
    if (elemento && elemento.value) {
        sessionStorage.setItem(campo, new Date(elemento.value).toISOString());
    }
});

// Preencher os campos ao carregar a página
window.onload = populateForm;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bancopodologia'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});



// Etapa 3 handling
function saveEtapa3Data() {
    const fields = [
      'Osteoporose', 'Renal', 'Epilepsia', 'Quimioterapia_Radioterapia',
      'Hipotireoidismo', 'Hepatite', 'Antecedente_Oncologico', 'Cardiopatia',
      'Hipertensao', 'Reumatismo', 'Hanseniase', 'Cirurgia_MMII', 'Marca_Passo',
      'Hipotensao', 'Insulina', 'Dieta_Hidrica', 'Injetavel', 'Dieta_Alimentar',
      'Via_Oral', 'Taxa_Glicemica', 'Alteracoes_Vasculares'
    ];
  
    fields.forEach(field => {
      const element = document.querySelector(`input[name="${field}"]:checked`);
      if (element) {
        sessionStorage.setItem(field, element.value);
      }
    });
  
    const idCliente = document.querySelector('input[name="id_cliente"]').value;
    sessionStorage.setItem('id_cliente', idCliente);
  }
  
  function submitEtapa3Data() {
    const etapa3Data = {};
    for (const field of Object.keys(sessionStorage)) {
      if (field !== 'id_cliente') {
        etapa3Data[field] = sessionStorage.getItem(field);
      }
    }
    etapa3Data.id_cliente = sessionStorage.getItem('id_cliente');
  
    console.log('Submitting Etapa3 Data:', etapa3Data);
    Etapa3.create(etapa3Data)
      .then(result => {
        console.log('Data inserted successfully:', result);
        clearEtapa3SessionStorage();
        window.location.href = '/next-step';
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        alert('Error saving data. Please check the information and try again.');
      });
  }
  
  function clearEtapa3SessionStorage() {
    for (const field of Object.keys(sessionStorage)) {
      if (field !== 'id_cliente') {
        sessionStorage.removeItem(field);
      }
    }
  }
  
  // Etapa 4 handling
  function saveEtapa4Data() {
    const fields = [
      'Flexível_E', 'Rígido_D', 'Rígido_E', 'Espalmado_D', 'Espalmado_E',
      'Martelo_D', 'Martelo_E', 'Queda_Metatarso_D', 'Queda_Metatarso_E',
      'Tipo_Marcha', 'Marcha_Descricao', 'Joelho', 'Articulacao', 'Sensibilidade_Dor'
    ];
  
    fields.forEach(field => {
      const element = document.querySelector(`input[name="${field}"]:checked`);
      if (element) {
        sessionStorage.setItem(field, element.value);
      } else {
        const textElement = document.querySelector(`input[name="${field}"]`);
        if (textElement) {
          sessionStorage.setItem(field, textElement.value);
        }
      }
    });
  
    const idCliente = document.querySelector('input[name="id_cliente"]').value;
    sessionStorage.setItem('id_cliente', idCliente);
  }
  
  function submitEtapa4Data() {
    const etapa4Data = {};
    for (const field of Object.keys(sessionStorage)) {
      if (field !== 'id_cliente') {
        etapa4Data[field] = sessionStorage.getItem(field);
      }
    }
    etapa4Data.id_cliente = sessionStorage.getItem('id_cliente');
  
    console.log('Submitting Etapa4 Data:', etapa4Data);
    Etapa4.create(etapa4Data)
      .then(result => {
        console.log('Data inserted successfully:', result);
        clearEtapa4SessionStorage();
        window.location.href = '/next-step';
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        alert('Error saving data. Please check the information and try again.');
      });
  }
  
  function clearEtapa4SessionStorage() {
    for (const field of Object.keys(sessionStorage)) {
      if (field !== 'id_cliente') {
        sessionStorage.removeItem(field);
      }
    }
  }

  // Ao criar um novo registro
await Etapa4.create({
    id_cliente: clienteId, // Adicione este campo
    // ... outros campos
  });
  
  // Ou ao atualizar
  await etapa4Instance.save({
    id_cliente: clienteId,
    // ... outros campos
  });
  const Etapa4 = sequelize.define('Etapa4', {
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false, // Esta configuração exige que o campo não seja nulo
      references: {
        model: 'Clientes', // ou o nome da sua tabela de clientes
        key: 'id_cliente'
      }
    },
    // ... outros campos
  });
  

  try {
    const Etapa4 = await Etapa4.create({
        id_cliente: idDoCliente, // Este valor não pode ser null
        // outros campos necessários...
    });
} catch (error) {
    console.error('Erro ao criar Etapa4:', error);
}

const data = {
    Flexivel_D: req.body.Flexivel_D === "1" ? 1 : 0,
    Flexivel_E: req.body.Flexivel_E === "1" ? 1 : 0,
    Rigido_D: req.body.Rigido_D === "1" ? 1 : 0,
    Rigido_E: req.body.Rigido_E === "1" ? 1 : 0,
    Espalmado_D: req.body.Espalmado_D === "1" ? 1 : 0,
    Espalmado_E: req.body.Espalmado_E === "1" ? 1 : 0,
    Martelo_D: req.body.Martelo_D === "1" ? 1 : 0,
    Martelo_E: req.body.Martelo_E === "1" ? 1 : 0,
    Queda_Metatarso_D: req.body.Queda_Metatarso_D === "1" ? 1 : 0,
    Queda_Metatarso_E: req.body.Queda_Metatarso_E === "1" ? 1 : 0,
};
