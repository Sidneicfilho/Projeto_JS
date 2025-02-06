function SaveData() {
    const inputs = [
        { name: 'Tipo_Pisada', key: 'Tipo_pisada' },
        { name: 'Tipo_Marcha', key: 'Tipo_Marcha' },
        { name: 'Tipo_Joelho', key: 'Tipo_Joelho' },
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