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