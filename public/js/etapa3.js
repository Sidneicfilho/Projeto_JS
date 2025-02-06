    
    
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
