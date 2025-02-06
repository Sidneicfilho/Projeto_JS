function saveData(){
    //saveData da ETAPA5
    if (document.querySelector('input[name="PD_halux"]:checked')) {
       sessionStorage.setItem('PD_halux', document.querySelector('input[name="PD_halux"]:checked').value);
    }
    if (document.querySelector('input[name="PD_2"]:checked')) {
        sessionStorage.setItem('PD_2', document.querySelector('input[name="PD_2"]:checked').value);
    }
    if (document.querySelector('input[name="PD_3"]:checked')) {
        sessionStorage.setItem('PD_3', document.querySelector('input[name="PD_3"]:checked').value);
    } 
    if (document.querySelector('input[name="PD_4"]:checked')) {
        sessionStorage.setItem('PD_4', document.querySelector('input[name="PD_4"]:checked').value);
    }
    if (document.querySelector('input[name="PD_5"]:checked')) {
        sessionStorage.setItem('PD_5', document.querySelector('input[name="PD_5"]:checked').value);
    }
    if (document.querySelector('input[name="PE_halux"]:checked')) {
        sessionStorage.setItem('PE_halux', document.querySelector('input[name="PE_halux"]:checked').value);
    }
    if (document.querySelector('input[name="PE_2"]:checked')) {
        sessionStorage.setItem('PE_2', document.querySelector('input[name="PE_2"]:checked').value);
    }
    if (document.querySelector('input[name="PE_3"]:checked')) {
        sessionStorage.setItem('PE_3', document.querySelector('input[name="PE_3"]:checked').value);
    }
    if (document.querySelector('input[name="PE_4"]:checked')) {
        sessionStorage.setItem('PE_4', document.querySelector('input[name="PE_4"]:checked').value);
    }
    if (document.querySelector('input[name="PE_5"]:checked')) {
        sessionStorage.setItem('PE_5', document.querySelector('input[name="PE_5"]:checked').value);
    }
    if (document.getElementById('outras_alteracoes')) {
        sessionStorage.setItem('outras_alteracoes', document.getElementById('outras_alteracoes').value);
    }


    
    const inputs = [
    { name: 'Onicatrofia', key: 'Onicatrofia' },
    { name: 'Onicocriptose', key: 'Onicocriptose' },
    { name: 'Onicorrexe', key: 'Onicorrexe' },
    { name: 'Granuloma', key: 'Granuloma' },
    { name: 'Onicogrifose', key: 'Onicogrifose' },
    { name: 'Onicolise', key: 'Onicolise' },
    { name: 'Onicofose', key: 'Onicofose' },
    { name: 'Psoriase_ungueal', key: 'Psoriase_ungueal' },
    { name: 'Onicomicose', key: 'Onicomicose' }
];

const formData = {};

inputs.forEach(input => {
    const selectedInput = document.querySelector(`input[name="${input.name}"]:checked`);
    if (selectedInput) {
        if (
            input.key.includes('Onicatrofia') ||
            input.key.includes('Onicocriptose') ||
            input.key.includes('Onicorrexe') ||
            input.key.includes('Granuloma') ||
            input.key.includes('Onicogrifose') ||
            input.key.includes('Onicolise') ||
            input.key.includes('Onicofose') ||
            input.key.includes('Psoriase_ungueal') ||
            input.key.includes('Onicomicose')
        ) {
            formData[input.key] = selectedInput.value === 'true';
        } else {
            formData[input.key] = selectedInput.value;
        }
    }
});


}

function showResumo() {
    // Recupera os valores dos inputs de rádio (PD e PE)
    const pdHalux = sessionStorage.getItem('PD_halux') || "Não informado";
    const pd2 = sessionStorage.getItem('PD_2') || "Não informado";
    const pd3 = sessionStorage.getItem('PD_3') || "Não informado";
    const pd4 = sessionStorage.getItem('PD_4') || "Não informado";
    const pd5 = sessionStorage.getItem('PD_5') || "Não informado";
    const peHalux = sessionStorage.getItem('PE_halux') || "Não informado";
    const pe2 = sessionStorage.getItem('PE_2') || "Não informado";
    const pe3 = sessionStorage.getItem('PE_3') || "Não informado";
    const pe4 = sessionStorage.getItem('PE_4') || "Não informado";
    const pe5 = sessionStorage.getItem('PE_5') || "Não informado";

    // Recupera o valor do campo de texto "outras_alteracoes"
    const outrasAlteracoes = sessionStorage.getItem('outras_alteracoes') || "Não informado";

    // Recupera os valores das checkboxes (condições das unhas)
    const onicatrofia = sessionStorage.getItem('Onicatrofia') || "Não informado";
    const onicocriptose = sessionStorage.getItem('Onicocriptose') || "Não informado";
    const onicorrexe = sessionStorage.getItem('Onicorrexe') || "Não informado";
    const granuloma = sessionStorage.getItem('Granuloma') || "Não informado";
    const onicogrifose = sessionStorage.getItem('Onicogrifose') || "Não informado";
    const onicolise = sessionStorage.getItem('Onicolise') || "Não informado";
    const onicofose = sessionStorage.getItem('Onicofose') || "Não informado";
    const psoriaseUngueal = sessionStorage.getItem('Psoriase_ungueal') || "Não informado";
    const onicomicose = sessionStorage.getItem('Onicomicose') || "Não informado";

    const resumo5 = `
        <h3>Condições dos Dedos (PD - Pé Direito)</h3>
        <p><strong>Hálux:</strong> ${pdHalux}</p>
        <p><strong>Dedo 2:</strong> ${pd2}</p>
        <p><strong>Dedo 3:</strong> ${pd3}</p>
        <p><strong>Dedo 4:</strong> ${pd4}</p>
        <p><strong>Dedo 5:</strong> ${pd5}</p>

        <h3>Condições dos Dedos (PE - Pé Esquerdo)</h3>
        <p><strong>Hálux:</strong> ${peHalux}</p>
        <p><strong>Dedo 2:</strong> ${pe2}</p>
        <p><strong>Dedo 3:</strong> ${pe3}</p>
        <p><strong>Dedo 4:</strong> ${pe4}</p>
        <p><strong>Dedo 5:</strong> ${pe5}</p>

        <h3>Outras Alterações</h3>
        <p><strong>Outras Alterações:</strong> ${outrasAlteracoes}</p>

        <h3>Condições das Unhas</h3>
        <p><strong>Onicatrofia:</strong> ${onicatrofia}</p>
        <p><strong>Onicocriptose:</strong> ${onicocriptose}</p>
        <p><strong>Onicorrexe:</strong> ${onicorrexe}</p>
        <p><strong>Granuloma:</strong> ${granuloma}</p>
        <p><strong>Onicogrifose:</strong> ${onicogrifose}</p>
        <p><strong>Onicolise:</strong> ${onicolise}</p>
        <p><strong>Onicofose:</strong> ${onicofose}</p>
        <p><strong>Psoríase Ungueal:</strong> ${psoriaseUngueal}</p>
        <p><strong>Onicomicose:</strong> ${onicomicose}</p>
    `;

    const resumoDiv = document.getElementById('resumo5');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo5;
    }
}