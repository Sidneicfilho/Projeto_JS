    
    
function saveData(){// Save data to sessionStorage
    if (document.querySelector('input[name="Osteoporose"]:checked')) {
        sessionStorage.setItem('Osteoporose', document.querySelector('input[name="Osteoporose"]:checked').value);
    }
    if (document.querySelector('input[name="Renal"]:checked')) {
        sessionStorage.setItem('Renal', document.querySelector('input[name="Renal"]:checked').value);
    }
    if (document.querySelector('input[name="Epilepsia"]:checked')) {
        sessionStorage.setItem('Epilepsia', document.querySelector('input[name="Epilepsia"]:checked').value);
    }
    if (document.querySelector('input[name="Quimioterapia_Radioterapia"]:checked')) {
        sessionStorage.setItem('Quimioterapia_Radioterapia', document.querySelector('input[name="Quimioterapia_Radioterapia"]:checked').value);
    }
    if (document.querySelector('input[name="Hipotireoidismo"]:checked')) {
        sessionStorage.setItem('Hipotireoidismo', document.querySelector('input[name="Hipotireoidismo"]:checked').value);
    }
    if (document.querySelector('input[name="Hepatite"]:checked')) {
        sessionStorage.setItem('Hepatite', document.querySelector('input[name="Hepatite"]:checked').value);
    }
    if (document.querySelector('input[name="Antecedente_Oncologico"]:checked')) {
        sessionStorage.setItem('Antecedente_Oncologico', document.querySelector('input[name="Antecedente_Oncologico"]:checked').value);
    }
    if (document.querySelector('input[name="Cardiopatia"]:checked')) {
        sessionStorage.setItem('Cardiopatia', document.querySelector('input[name="Cardiopatia"]:checked').value);
    }
    if (document.querySelector('input[name="Hipertensao"]:checked')) {
        sessionStorage.setItem('Hipertensao', document.querySelector('input[name="Hipertensao"]:checked').value);
    }
    if (document.querySelector('input[name="Reumatismo"]:checked')) {
        sessionStorage.setItem('Reumatismo', document.querySelector('input[name="Reumatismo"]:checked').value);
    }
    if (document.querySelector('input[name="Hanseniase"]:checked')) {
        sessionStorage.setItem('Hanseniase', document.querySelector('input[name="Hanseniase"]:checked').value);
    }
    if (document.querySelector('input[name="Cirurgia_MMII"]:checked')) {
        sessionStorage.setItem('Cirurgia_MMII', document.querySelector('input[name="Cirurgia_MMII"]:checked').value);
    }
    if (document.querySelector('input[name="Marca_Passo"]:checked')) {
        sessionStorage.setItem('Marca_Passo', document.querySelector('input[name="Marca_Passo"]:checked').value);
    }
    if (document.querySelector('input[name="Hipotensao"]:checked')) {
        sessionStorage.setItem('Hipotensao', document.querySelector('input[name="Hipotensao"]:checked').value);
    }
    if (document.querySelector('input[name="Insulina"]:checked')) {
        sessionStorage.setItem('Insulina', document.querySelector('input[name="Insulina"]:checked').value);
    }
    if (document.querySelector('input[name="Dieta_Hidrica"]:checked')) {
        sessionStorage.setItem('Dieta_Hidrica', document.querySelector('input[name="Dieta_Hidrica"]:checked').value);
    }
    if (document.querySelector('input[name="Injetavel"]:checked')) {
        sessionStorage.setItem('Injetavel', document.querySelector('input[name="Injetavel"]:checked').value);
    }
    if (document.querySelector('input[name="Dieta_Alimentar"]:checked')) {
        sessionStorage.setItem('Dieta_Alimentar', document.querySelector('input[name="Dieta_Alimentar"]:checked').value);
    }
    if (document.querySelector('input[name="Via_Oral"]:checked')) {
        sessionStorage.setItem('Via_Oral', document.querySelector('input[name="Via_Oral"]:checked').value);
    }
    if (document.querySelector('input[name="Taxa_Glicemica"]')) {
        sessionStorage.setItem('Taxa_Glicemica', document.querySelector('input[name="Taxa_Glicemica"]').value);
    }
    if (document.querySelector('input[name="Alteracoes_Vasculares"]:checked')) {
        sessionStorage.setItem('Alteracoes_Vasculares', document.querySelector('input[name="Alteracoes_Vasculares"]:checked').value);
    }
}

// Envia os dados para o backend
fetch('/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        osteoporose,
        renal,
        epilepsia,
        quimioterapiaRadioterapia,
        hipotireoidismo,
        hepatite,
        antecedenteOncologico,
        cardiopatia,
        hipertensao,
        reumatismo,
        hanseniase,
        cirurgiaMMII,
        marcaPasso,
        hipotensao,
        insulina,
        dietaHidrica,
        injetavel,
        dietaAlimentar,
        viaOral,
        taxaGlicemica,
        alteracoesVasculares
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
    const osteoporose = sessionStorage.getItem('osteoporose') || "Não informado";
    const renal = sessionStorage.getItem('renal') || "Não informado";
    const epilepsia = sessionStorage.getItem('epilepsia') || "Não informado";
    const quimioterapiaRadioterapia = sessionStorage.getItem('quimioterapiaRadioterapia') || "Não informado";
    const hipotireoidismo = sessionStorage.getItem('hipotireoidismo') || "Não informado";
    const hepatite = sessionStorage.getItem('hepatite') || "Não informado";
    const antecedenteOncologico = sessionStorage.getItem('antecedenteOncologico') || "Não informado";
    const cardiopatia = sessionStorage.getItem('cardiopatia') || "Não informado";
    const hipertensao = sessionStorage.getItem('hipertensao') || "Não informado";
    const reumatismo = sessionStorage.getItem('reumatismo') || "Não informado";
    const hanseniase = sessionStorage.getItem('hanseniase') || "Não informado";
    const cirurgiaMMII = sessionStorage.getItem('cirurgiaMMII') || "Não informado";
    const marcaPasso = sessionStorage.getItem('marcaPasso') || "Não informado";
    const hipotensao = sessionStorage.getItem('hipotensao') || "Não informado";
    const insulina = sessionStorage.getItem('insulina') || "Não informado";
    const dietaHidrica = sessionStorage.getItem('dietaHidrica') || "Não informado";
    const injetavel = sessionStorage.getItem('injetavel') || "Não informado";
    const dietaAlimentar = sessionStorage.getItem('dietaAlimentar') || "Não informado";
    const viaOral = sessionStorage.getItem('viaOral') || "Não informado";
    const taxaGlicemica = sessionStorage.getItem('taxaGlicemica') || "Não informado";
    const alteracoesVasculares = sessionStorage.getItem('alteracoesVasculares') || "Não informado";

    const resumo3 = `
        <p><strong>Osteoporose:</strong> ${osteoporose}</p>
        <p><strong>Renal:</strong> ${renal}</p>
        <p><strong>Epilepsia:</strong> ${epilepsia}</p>
        <p><strong>Quimioterapia/Radioterapia:</strong> ${quimioterapiaRadioterapia}</p>
        <p><strong>Hipotireoidismo:</strong> ${hipotireoidismo}</p>
        <p><strong>Hepatite:</strong> ${hepatite}</p>
        <p><strong>Antecedente Oncológico:</strong> ${antecedenteOncologico}</p>
        <p><strong>Cardiopatia:</strong> ${cardiopatia}</p>
        <p><strong>Hipertensão:</strong> ${hipertensao}</p>
        <p><strong>Reumatismo:</strong> ${reumatismo}</p>
        <p><strong>Hanseniase:</strong> ${hanseniase}</p>
        <p><strong>Cirurgia MMII:</strong> ${cirurgiaMMII}</p>
        <p><strong>Marca-passo:</strong> ${marcaPasso}</p>
        <p><strong>Hipotensão:</strong> ${hipotensao}</p>
        <p><strong>Insulina:</strong> ${insulina}</p>
        <p><strong>Dieta Hídrica:</strong> ${dietaHidrica}</p>
        <p><strong>Injetável:</strong> ${injetavel}</p>
        <p><strong>Dieta Alimentar:</strong> ${dietaAlimentar}</p>
        <p><strong>Via Oral:</strong> ${viaOral}</p>
        <p><strong>Taxa Glicêmica:</strong> ${taxaGlicemica}</p>
        <p><strong>Alterações Vasculares:</strong> ${alteracoesVasculares}</p>
    `;

    const resumoDiv = document.getElementById('resumo3');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo3;
    }
}