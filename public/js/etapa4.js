function SaveData() {
    const inputs = [
        { name: 'Tipo_Pisada', key: 'Tipo_pisada' },
        { name: 'Tipo_Marcha', key: 'Tipo_Marcha' },
        { name: 'Joelho', key: 'Joelho' },
        { name: 'Articulacao', key: 'Articulacao' },
        { name: 'Sensibilidade_Dor', key: 'Sensibilidade_Dor' },
        { name: 'Flexivel_E', key: 'Flexivel_E' },
        { name: 'Flexivel_D', key: 'Flexivel_D' },
        { name: 'Rigido_E', key: 'Rigido_E' },
        { name: 'Rigido_D', key: 'Rigido_D' },
        { name: 'Espalmado_E', key: 'Espalmado_E' },
        { name: 'Espalmado_D', key: 'Espalmado_D' },
        { name: 'Martelo_E', key: 'Martelo_E' },
        { name: 'Martelo_D', key: 'Martelo_D' },
        { name: 'Queda_Metatarso_E', key: 'Queda_Metatarso_E' },
        { name: 'Queda_Metatarso_D', key: 'Queda_Metatarso_D' }
    ];

    const formData = {};

    inputs.forEach(input => {
        const selectedInput = document.querySelector(`input[name="${input.name}"]:checked`);
        if (selectedInput) {
            // Para campos booleanos, converte 'true' ou 'false' para boolean
            if (input.key.includes('Flexivel') || input.key.includes('Rigido') || input.key.includes('Espalmado') || input.key.includes('Martelo') || input.key.includes('Queda_Metatarso')) {
                formData[input.key] = selectedInput.value === 'true';
            } else {
                formData[input.key] = selectedInput.value;
            }
        } else {
            // Define false para campos booleanos não selecionados
            if (input.key.includes('Flexivel') || input.key.includes('Rigido') || input.key.includes('Espalmado') || input.key.includes('Martelo') || input.key.includes('Queda_Metatarso')) {
                formData[input.key] = false;
            } else {
                formData[input.key] = null; // Ou um valor padrão, se necessário
            }
        }
    });

    // Envia os dados para o backend via fetch
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Dados salvos com sucesso!');
        console.log(data); // Exibe a resposta do servidor no console
    })
    .catch(error => {
        alert('Erro ao salvar os dados!');
        console.error('Erro:', error); // Exibe o erro no console
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

function showResumo() {
    const flexivelE = sessionStorage.getItem('Flexível_E') || "Não informado";
    const rigidoD = sessionStorage.getItem('Rígido_D') || "Não informado";
    const rigidoE = sessionStorage.getItem('Rígido_E') || "Não informado";
    const espalmadoD = sessionStorage.getItem('Espalmado_D') || "Não informado";
    const espalmadoE = sessionStorage.getItem('Espalmado_E') || "Não informado";
    const marteloD = sessionStorage.getItem('Martelo_D') || "Não informado";
    const marteloE = sessionStorage.getItem('Martelo_E') || "Não informado";
    const quedaMetatarsoD = sessionStorage.getItem('Queda_Metatarso_D') || "Não informado";
    const quedaMetatarsoE = sessionStorage.getItem('Queda_Metatarso_E') || "Não informado";
    const tipoMarcha = sessionStorage.getItem('Tipo_Marcha') || "Não informado";
    const marchaDescricao = sessionStorage.getItem('Marcha_Descricao') || "Não informado";
    const joelho = sessionStorage.getItem('Joelho') || "Não informado";
    const articulacao = sessionStorage.getItem('Articulacao') || "Não informado";
    const sensibilidadeDor = sessionStorage.getItem('Sensibilidade_Dor') || "Não informado";

    const resumo4 = `
        <p><strong>Flexível (Esquerdo):</strong> ${flexivelE}</p>
        <p><strong>Rígido (Direito):</strong> ${rigidoD}</p>
        <p><strong>Rígido (Esquerdo):</strong> ${rigidoE}</p>
        <p><strong>Espalmado (Direito):</strong> ${espalmadoD}</p>
        <p><strong>Espalmado (Esquerdo):</strong> ${espalmadoE}</p>
        <p><strong>Martelo (Direito):</strong> ${marteloD}</p>
        <p><strong>Martelo (Esquerdo):</strong> ${marteloE}</p>
        <p><strong>Queda do Metatarso (Direito):</strong> ${quedaMetatarsoD}</p>
        <p><strong>Queda do Metatarso (Esquerdo):</strong> ${quedaMetatarsoE}</p>
        <p><strong>Tipo de Marcha:</strong> ${tipoMarcha}</p>
        <p><strong>Descrição da Marcha:</strong> ${marchaDescricao}</p>
        <p><strong>Joelho:</strong> ${joelho}</p>
        <p><strong>Articulação:</strong> ${articulacao}</p>
        <p><strong>Sensibilidade/Dor:</strong> ${sensibilidadeDor}</p>
    `;

    const resumoDiv = document.getElementById('resumo4');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo4;
    }
}