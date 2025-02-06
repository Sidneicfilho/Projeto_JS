function saveData() {
    // Verificar e salvar 'teve_erisipela'
    if (document.querySelector('input[name="teve_erisipela"]:checked')) {
        sessionStorage.setItem('teve_erisipela', document.querySelector('input[name="teve_erisipela"]:checked').value);
    }
 
    // Definição dos campos a serem enviados
    const inputs = [
        { name: 'bromidrose', key: 'bromidrose' },
        { name: 'hidrose', key: 'hidrose' },
        { name: 'desidrose', key: 'desidrose' },
        { name: 'isquemia', key: 'isquemia' },
        { name: 'mal_perfurante', key: 'mal_perfurante' },
        { name: 'edema', key: 'edema' },
        { name: 'tinea', key: 'tinea' },
        { name: 'psoriase', key: 'psoriase' },
        { name: 'tungiase', key: 'tungiase' },
        { name: 'verruga_plantar', key: 'verruga_plantar' },
        { name: 'calo_dorsal', key: 'calo_dorsal' },
        { name: 'querotose', key: 'querotose' },
        { name: 'calo_plantar', key: 'calo_plantar' },
        { name: 'hiperqueratose', key: 'hiperqueratose' },
        { name: 'calo_interdigital', key: 'calo_interdigital' },
        { name: 'outras_alteracoes', key: 'outras_alteracoes' },
        { name: 'comentarios', key: 'comentarios' },
        { name: 'teve_erisipela', key: 'teve_erisipela' } // Adicionando 'teve_erisipela' aos inputs
    ];
 
    const formData = {};
 
    // Preenche o formData com os valores dos inputs
    inputs.forEach(input => {
        const selectedInput = document.querySelector(`input[name="${input.name}"]:checked`);
        if (selectedInput) {
            // Para campos booleanos, converte 'true' ou 'false' para boolean (1 ou 0)
            if (input.key === 'teve_erisipela') {
                formData[input.key] = selectedInput.value; // Armazena 'Sim' ou 'Não'
            } else if (input.key.includes('bromidrose') || input.key.includes('hidrose') || input.key.includes('desidrose') ||
                input.key.includes('isquemia') || input.key.includes('mal_perfurante') || input.key.includes('edema') ||
                input.key.includes('tinea') || input.key.includes('psoriase') || input.key.includes('tungiase') ||
                input.key.includes('verruga_plantar') || input.key.includes('calo_dorsal') || input.key.includes('querotose') ||
                input.key.includes('calo_plantar') || input.key.includes('hiperqueratose') || input.key.includes('calo_interdigital')) {
                formData[input.key] = selectedInput.value === 'true' ? 1 : 0;
            } else {
                formData[input.key] = selectedInput.value;
            }
        } else {
            // Define false para campos booleanos não selecionados
            if (input.key.includes('bromidrose') || input.key.includes('hidrose') || input.key.includes('desidrose') ||
                input.key.includes('isquemia') || input.key.includes('mal_perfurante') || input.key.includes('edema') ||
                input.key.includes('tinea') || input.key.includes('psoriase') || input.key.includes('tungiase') ||
                input.key.includes('verruga_plantar') || input.key.includes('calo_dorsal') || input.key.includes('querotose') ||
                input.key.includes('calo_plantar') || input.key.includes('hiperqueratose') || input.key.includes('calo_interdigital')) {
                formData[input.key] = 0; // Para campos booleanos não selecionados
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

function showResumo() {
    // Recupera os valores dos inputs de rádio (teve_erisipela)
    const teveErisipela = sessionStorage.getItem('teve_erisipela') || "Não informado";

    // Recupera os valores das checkboxes (condições dermatológicas)
    const bromidrose = sessionStorage.getItem('bromidrose') || "Não informado";
    const hidrose = sessionStorage.getItem('hidrose') || "Não informado";
    const desidrose = sessionStorage.getItem('desidrose') || "Não informado";
    const isquemia = sessionStorage.getItem('isquemia') || "Não informado";
    const malPerfurante = sessionStorage.getItem('mal_perfurante') || "Não informado";
    const edema = sessionStorage.getItem('edema') || "Não informado";
    const tinea = sessionStorage.getItem('tinea') || "Não informado";
    const psoriase = sessionStorage.getItem('psoriase') || "Não informado";
    const tungiase = sessionStorage.getItem('tungiase') || "Não informado";
    const verrugaPlantar = sessionStorage.getItem('verruga_plantar') || "Não informado";
    const caloDorsal = sessionStorage.getItem('calo_dorsal') || "Não informado";
    const querotose = sessionStorage.getItem('querotose') || "Não informado";
    const caloPlantar = sessionStorage.getItem('calo_plantar') || "Não informado";
    const hiperqueratose = sessionStorage.getItem('hiperqueratose') || "Não informado";
    const caloInterdigital = sessionStorage.getItem('calo_interdigital') || "Não informado";
    const outrasAlteracoes = sessionStorage.getItem('outras_alteracoes') || "Não informado";
    const comentarios = sessionStorage.getItem('comentarios') || "Não informado";

    const resumo6 = `
        <h3>Condições Dermatológicas</h3>
        <p><strong>Teve Erisipela:</strong> ${teveErisipela}</p>
        <p><strong>Bromidrose:</strong> ${bromidrose}</p>
        <p><strong>Hidrose:</strong> ${hidrose}</p>
        <p><strong>Desidrose:</strong> ${desidrose}</p>
        <p><strong>Isquemia:</strong> ${isquemia}</p>
        <p><strong>Mal Perfurante:</strong> ${malPerfurante}</p>
        <p><strong>Edema:</strong> ${edema}</p>
        <p><strong>Tinea:</strong> ${tinea}</p>
        <p><strong>Psoríase:</strong> ${psoriase}</p>
        <p><strong>Tungiase:</strong> ${tungiase}</p>
        <p><strong>Verruga Plantar:</strong> ${verrugaPlantar}</p>
        <p><strong>Calo Dorsal:</strong> ${caloDorsal}</p>
        <p><strong>Queratose:</strong> ${querotose}</p>
        <p><strong>Calo Plantar:</strong> ${caloPlantar}</p>
        <p><strong>Hiperqueratose:</strong> ${hiperqueratose}</p>
        <p><strong>Calo Interdigital:</strong> ${caloInterdigital}</p>

        <h3>Outras Alterações</h3>
        <p><strong>Outras Alterações:</strong> ${outrasAlteracoes}</p>

        <h3>Comentários</h3>
        <p><strong>Comentários:</strong> ${comentarios}</p>
    `;

    const resumoDiv = document.getElementById('resumo6');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo6;
    }
}
 
 