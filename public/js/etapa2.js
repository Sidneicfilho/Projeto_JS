function saveData(){
         //saveData da ETAPA2
         if (document.getElementById('queixa_principal')) {
            sessionStorage.setItem('queixa_principal', document.getElementById('queixa_principal').value);
    }
        
    if (document.querySelector('input[name="frequenta_podologo"]:checked')) {
            sessionStorage.setItem('frequenta_podologo', document.querySelector('input[name="frequenta_podologo"]:checked').value);
    }
        
    if (document.getElementById('frequencia_visita_podologo')) {
            sessionStorage.setItem('frequencia_visita_podologo', document.getElementById('frequencia_visita_podologo').value);
    }
        
    if (document.querySelector('input[name="uso_medicamento"]:checked')) {
            sessionStorage.setItem('uso_medicamento', document.querySelector('input[name="uso_medicamento"]:checked').value);
    }
        
    if (document.getElementById('tipo_medicamento')) {
            sessionStorage.setItem('tipo_medicamento', document.getElementById('tipo_medicamento').value);
    }
        
    if (document.querySelector('input[name="alergico"]:checked')) {
            sessionStorage.setItem('alergico', document.querySelector('input[name="alergico"]:checked').value);
    }
        
    if (document.getElementById('alergia_substancia')) {
            sessionStorage.setItem('alergia_substancia', document.getElementById('alergia_substancia').value);
    }
        
    if (document.querySelector('input[name="posicao_trabalho"]:checked')) {
            sessionStorage.setItem('posicao_trabalho', document.querySelector('input[name="posicao_trabalho"]:checked').value);
    }
        
    if (document.getElementById('duracao_trabalho')) {
            sessionStorage.setItem('duracao_trabalho', document.getElementById('duracao_trabalho').value);
    }
        
    if (document.querySelector('input[name="tempo_em_pe"]:checked')) {
            sessionStorage.setItem('tempo_em_pe', document.querySelector('input[name="tempo_em_pe"]:checked').value);
    }
        
    if (document.querySelector('input[name="tempo_sentado"]:checked')) {
            sessionStorage.setItem('tempo_sentado', document.querySelector('input[name="tempo_sentado"]:checked').value);
    }
        
    if (document.querySelector('input[name="tempo_caminhando"]:checked')) {
            sessionStorage.setItem('tempo_caminhando', document.querySelector('input[name="tempo_caminhando"]:checked').value);
    }
        
    if (document.getElementById('numero_calcado')) {
            sessionStorage.setItem('numero_calcado', document.getElementById('numero_calcado').value);
    }
        
    if (document.getElementById('tipo_calcado_diario')) {
            sessionStorage.setItem('tipo_calcado_diario', document.getElementById('tipo_calcado_diario').value);
    }
        
    if (document.getElementById('tipo_calcado_qual')) {
            sessionStorage.setItem('tipo_calcado_qual', document.getElementById('tipo_calcado_qual').value);
    }
    if (document.querySelector('input[name="fumante"]:checked')) {
        sessionStorage.setItem('fumante', document.querySelector('input[name="fumante"]:checked').value);
    }
    
    if (document.querySelector('input[name="menstruacao"]:checked')) {
        sessionStorage.setItem('menstruacao', document.querySelector('input[name="menstruacao"]:checked').value);
    }
    
    if (document.querySelector('input[name="gestante"]:checked')) {
        sessionStorage.setItem('gestante', document.querySelector('input[name="gestante"]:checked').value);
    }
    
    if (document.querySelector('input[name="amamentando"]:checked')) {
        sessionStorage.setItem('amamentando', document.querySelector('input[name="amamentando"]:checked').value);
    }
    
    if (document.getElementById('dum')) {
        sessionStorage.setItem('dum', document.getElementById('dum').value);
    }
    
    if (document.querySelector('input[name="pratica_atividade_fisica"]:checked')) {
        sessionStorage.setItem('pratica_atividade_fisica', document.querySelector('input[name="pratica_atividade_fisica"]:checked').value);
    }
    
    if (document.getElementById('frequencia_atividade_fisica')) {
        sessionStorage.setItem('frequencia_atividade_fisica', document.getElementById('frequencia_atividade_fisica').value);
    }
    
    if (document.getElementById('esporte_atividade')) {
        sessionStorage.setItem('esporte_atividade', document.getElementById('esporte_atividade').value);
    }
    
    if (document.getElementById('tipo_calcado_esporte')) {
        sessionStorage.setItem('tipo_calcado_esporte', document.getElementById('tipo_calcado_esporte').value);
    }
}

// Enviar os dados da ETAPA2 para o backend
function submitForm() {
    // Coleta os dados do sessionStorage
    const queixa_principal = sessionStorage.getItem('queixa_principal');
    const frequenta_podologo = sessionStorage.getItem('frequenta_podologo');
    const frequencia_visita_podologo = sessionStorage.getItem('frequencia_visita_podologo');
    const uso_medicamento = sessionStorage.getItem('uso_medicamento');
    const tipo_medicamento = sessionStorage.getItem('tipo_medicamento');
    const alergico = sessionStorage.getItem('alergico');
    const alergia_substancia = sessionStorage.getItem('alergia_substancia');
    const posicao_trabalho = sessionStorage.getItem('posicao_trabalho');
    const duracao_trabalho = sessionStorage.getItem('duracao_trabalho');
    const tempo_em_pe = sessionStorage.getItem('tempo_em_pe');
    const tempo_sentado = sessionStorage.getItem('tempo_sentado');
    const tempo_caminhando = sessionStorage.getItem('tempo_caminhando');
    const numero_calcado = sessionStorage.getItem('numero_calcado');
    const tipo_calcado_diario = sessionStorage.getItem('tipo_calcado_diario');
    const tipo_calcado_qual = sessionStorage.getItem('tipo_calcado_qual');
    const fumante = sessionStorage.getItem('fumante');
    const menstruacao = sessionStorage.getItem('menstruacao');
    const gestante = sessionStorage.getItem('gestante');
    const amamentando = sessionStorage.getItem('amamentando');
    const dum = sessionStorage.getItem('dum');
    const praticaAtividadeFisica = sessionStorage.getItem('pratica_atividade_fisica');
    const frequenciaAtividadeFisica = sessionStorage.getItem('frequencia_atividade_fisica');
    const esporteAtividade = sessionStorage.getItem('esporte_atividade');
    const tipoCalcadoEsporte = sessionStorage.getItem('tipo_calcado_esporte');

    // Envia os dados para o backend via fetch
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            queixa_principal,
            frequenta_podologo,
            frequencia_visita_podologo,
            uso_medicamento,
            tipo_medicamento,
            alergico,
            alergia_substancia,
            posicao_trabalho,
            duracao_trabalho,
            tempo_em_pe,
            tempo_sentado,
            tempo_caminhando,
            numero_calcado,
            tipo_calcado_diario,
            tipo_calcado_qual,
            fumante,
            menstruacao,
            gestante,
            amamentando,
            dum,
            praticaAtividadeFisica,
            frequenciaAtividadeFisica,
            esporteAtividade,
            tipoCalcadoEsporte
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
}



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