// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import { Articulacao } from '../models/Articulacao';
import { Cliente } from '../models/Cliente';
import { Consulta } from '../models/Consulta';
 // Remove this line
import { DadosClinicos } from '../models/DadosClinicos';
import { Etapa1 } from '../models/Etapa1';
import { Etapa2 } from '../models/etapa2';
import { Etapa3 } from '../models/etapa3';
import { Etapa4 } from '../models/etapa4';



import { LadoTipoPe } from '../models/LadoTipoPe';
import { Pe } from '../models/Pe';
import { PeTipoPisada } from '../models/PeTipoPisada';
import { PeTiposLesoes } from '../models/PeTiposLesoes';
import { Podologo } from '../models/Podologo';
import { PosicaoTrabalho } from '../models/PosicaoTrabalho';

import { TipoArtelhos } from '../models/TipoArtelhos';
import { TipoDoencaDadosClinicos } from '../models/TipoDoencaDadosClinicos';
import { TipoJoelho } from '../models/TipoJoelho';
import { TipoMarcha } from '../models/TipoMarcha';
import { TipoPerfusao } from '../models/TipoPerfusao';
import { TipoPisada } from '../models/TipoPisada';
import { TiposLesoes } from '../models/TiposLesoes';

export const index = (req: Request, res: Response) => {
    res.redirect('/etapa1');
};

let formData: { nome?: string; endereco?: string; bairro?: string; cidade?: string; estado?: string; cep?: string; tel_res?: string; telefone?: string; tel_emergencia?: string; data_nascimento?: Date; sexo?: string; profissao?: string; email?: string; contato?: string; } = {};

let formData2: {
    queixa_principal?: string;
    frequenta_podologo?: 'Sim' | 'Não';
    frequencia_podologo?: string;
    uso_medicamentos?: 'Sim' | 'Não';
    quais_medicamentos?: string;
    alergico?: 'Sim' | 'Não';
    quais_substancias?: string;
    posicao_trabalho?: 'Em pé' | 'Sentado' | 'Andando';
    duracao_trabalho?: string;
    tempo_em_pe?: 'Sim' | 'Não';
    tempo_sentado?: 'Sim' | 'Não';
    tempo_caminhando?: 'Sim' | 'Não';
    numero_calcado?: string;
    tipo_calcado_diario?: 'Chinelo' | 'Tênis' | 'Outro';
    tipo_calcado_qual?: 'Ortopédico' | 'Descanso' | 'Outro';
    fumante?: 'Sim' | 'Não';
    ciclo_menstruacao_regular?: 'Sim' | 'Não';
    gestante?: 'Sim' | 'Não';
    amamentando?: 'Sim' | 'Não';
    dum?: Date;
    pratica_atividade_fisica?: 'Sim' | 'Não';
    frequencia_atividade?: string;
    esporte_atividade?: string;
    tipo_calcado_esporte?: string;
} = {};


let formData3: {
    Osteoporose?: boolean;
    Renal?: boolean;
    Epilepsia?: boolean;
    Quimioterapia_Radioterapia?: boolean;
    Hipotiroidismo?: boolean;
    Antecedente_Oncologico?: boolean;
    Hepatite?: boolean;
    Cardiopatia?: boolean;
    Hipotensao?: boolean;
    Reumatismo?: boolean;
    Hanseniase?: boolean;
    Cirurgia_MMII?: boolean;
    Marca_Passo?: boolean;
    Hipertensao?: string;
    Insulina?: string;
    Dieta_Hidrica?: string;
    Injetavel?: boolean;
    Dieta_Alimentar?: boolean;
    Via_Oral?: boolean;
    Taxa_Glicemica?: string;
    Alteracoes_Vasculares?: boolean;
} = {};




let formData4: {
    tipo_pisada?: string[];
    flexivel_d?: boolean;
    flexivel_e?: boolean;
    rigido_d?: boolean;
    rigido_e?: boolean;
    espalmado_d?: boolean;
    espalmado_e?: boolean;
    martelo_d?: boolean;
    martelo_e?: boolean;
    queda_metatarso_d?: boolean;
    queda_metatarso_e?: boolean;
    tipo_marcha?: string;
    marcha_descricao?: string;
    joelho?: string;
    articulacao?: string;
    sensibilidade_dor?: string;
} = {};

let formData5 = {
    unha_caracol: false,
    unha_cunha: false,
    unha_funil: false,
    unha_gancho: false,
    unha_involuta: false,
    unha_normal: false,
    unha_telha: false,
    unha_torques: false,
    pd_halux: false,
    pd_2: false,
    pd_3: false,
    pd_4: false,
    pd_5: false,
    pe_halux: false,
    pe_2: false,
    pe_3: false,
    pe_4: false,
    pe_5: false,
    onicoatrofia: false,
    onicocriptose: false,
    onicorrexe: false,
    granuloma: false,
    onicogrifose: false,
    onicolise: false,
    onicofose: false,
    psoriase_ungueal: false,
    onicomicose: false,
    outros_alteracoes_ungueais: ''
};

let formData6 = {
    bromidrose: false,
    hidrose: false,
    desidrose: false,
    isquemia: false,
    mal_perfurante: false,
    edema: false,
    tinea: false,
    psoriase: false,
    tungiase: false,
    verruga_plantar: false,
    calo_dorsal: false,
    queratose: false,
    calo_plantar: false,
    hiperqueratose: false,
    calo_interdigital: false,
    perfusao_pd_normal: false,
    perfusao_pd_palido: false,
    perfusao_pd_cianotico: false,
    perfusao_pe_normal: false,
    perfusao_pe_palido: false,
    perfusao_pe_cianotico: false,
    erisipela: false,
    outras_alteracoes_pele: ''
};




export const etapa1 = (req: Request, res: Response) => {
    res.render('etapa1');
};

export const etapa1Post = (req: Request, res: Response) => {
    const { 
        nome, endereco, bairro, cidade,  estado, cep, tel_res, telefone, tel_emergencia, data_nascimento, sexo, profissao, email , contato
    } = req.body;
 
    formData.nome = nome;
    formData.endereco = endereco;
    formData.bairro = bairro;
    formData.cidade = cidade;
    formData.estado = estado;
    formData.cep = cep;
    formData.tel_res = tel_res;
    formData.telefone = telefone;
    formData.tel_emergencia = tel_emergencia;
    formData.data_nascimento = data_nascimento;
    formData.sexo = sexo;
    formData.profissao = profissao;
    formData.email = email;
    formData.contato = contato;
 
    res.redirect('/etapa2');
 };

export const etapa2 = (req: Request, res: Response) => {
    res.render('etapa2');
};

export const etapa2Post = (req: Request, res: Response) => {
    const { 
        queixa_principal,
        frequenta_podologo,
        frequencia_podologo,
        uso_medicamentos,
        quais_medicamentos,
        alergico,
        quais_substancias,
        posicao_trabalho,
        duracao_trabalho,
        tempo_em_pe,
        tempo_sentado,
        tempo_caminhando,
        numero_calcado,
        tipo_calcado_diario,
        tipo_calcado_qual,
        fumante,
        ciclo_menstruacao_regular,
        gestante,
        amamentando,
        dum,
        pratica_atividade_fisica,
        frequencia_atividade,
        esporte_atividade,
        tipo_calcado_esporte
    } = req.body;

    formData2.queixa_principal = queixa_principal;
    formData2.frequenta_podologo = frequenta_podologo;
    formData2.frequencia_podologo = frequencia_podologo;
    formData2.uso_medicamentos = uso_medicamentos;
    formData2.quais_medicamentos = quais_medicamentos;
    formData2.alergico = alergico;
    formData2.quais_substancias = quais_substancias;
    formData2.posicao_trabalho = posicao_trabalho;
    formData2.duracao_trabalho = duracao_trabalho;
    formData2.tempo_em_pe = tempo_em_pe;
    formData2.tempo_sentado = tempo_sentado;
    formData2.tempo_caminhando = tempo_caminhando;
    formData2.numero_calcado = numero_calcado;
    formData2.tipo_calcado_diario = tipo_calcado_diario;
    formData2.tipo_calcado_qual = tipo_calcado_qual;
    formData2.fumante = fumante;
    formData2.ciclo_menstruacao_regular = ciclo_menstruacao_regular;
    formData2.gestante = gestante;
    formData2.amamentando = amamentando;
    formData2.dum = new Date(dum);
    formData2.pratica_atividade_fisica = pratica_atividade_fisica;
    formData2.frequencia_atividade = frequencia_atividade;
    formData2.esporte_atividade = esporte_atividade;
    formData2.tipo_calcado_esporte = tipo_calcado_esporte;
    
    res.redirect('/etapa3');
};



export const etapa3 = (req: Request, res: Response) => {
    res.render('etapa3', { resumo: formData });
};

export const etapa3Post = (req: Request, res: Response) => {
    const {
        Osteoporose, Renal, Epilepsia, Quimioterapia_Radioterapia, Hipotiroidismo, Hepatite, Antecedente_Oncologico,
        Cardiopatia, Hipotensao, Reumatismo, Hanseniase, Cirurgia_MMII, Marca_Passo, Hipertensao, Insulina,
        Dieta_Hidrica, Injetavel, Dieta_Alimentar, Via_Oral, Taxa_Glicemica, Alteracoes_Vasculares
    } = req.body;
   
    formData3.Osteoporose = Osteoporose;
    formData3.Renal = Renal;
    formData3.Epilepsia = Epilepsia;
    formData3.Quimioterapia_Radioterapia = Quimioterapia_Radioterapia;
    formData3.Hipotiroidismo = Hipotiroidismo;
    formData3.Hepatite = Hepatite;
    formData3.Antecedente_Oncologico = Antecedente_Oncologico;
    formData3.Cardiopatia = Cardiopatia;
    formData3.Hipertensao = Hipertensao;
    formData3.Reumatismo = Reumatismo;
    formData3.Hanseniase = Hanseniase;
    formData3.Cirurgia_MMII = Cirurgia_MMII;
    formData3.Marca_Passo = Marca_Passo;
    formData3.Hipotensao = Hipotensao;
    formData3.Insulina = Insulina;
    formData3.Dieta_Hidrica = Dieta_Hidrica;
    formData3.Injetavel = Injetavel;
    formData3.Dieta_Alimentar = Dieta_Alimentar;
    formData3.Via_Oral = Via_Oral;
    formData3.Taxa_Glicemica = Taxa_Glicemica;
    formData3.Alteracoes_Vasculares = Alteracoes_Vasculares;
   
   
    res.redirect('/etapa4');
};


export const etapa4 = (req: Request, res: Response) => {
    res.render('etapa4', { resumo: formData4 });
};

export const etapa4Post = (req: Request, res: Response) => {
    const { 
        tipo_pisada, 
        flexivel_d, flexivel_e, 
        rigido_d, rigido_e, 
        espalmado_d, espalmado_e, 
        martelo_d, martelo_e, 
        queda_metatarso_d, queda_metatarso_e, 
        tipo_marcha, 
        marcha_descricao, 
        joelho, 
        articulacao, 
        sensibilidade_dor 
    } = req.body;

    formData4 = {
        tipo_pisada,
        flexivel_d: flexivel_d === 'true',
        flexivel_e: flexivel_e === 'true',
        rigido_d: rigido_d === 'true',
        rigido_e: rigido_e === 'true',
        espalmado_d: espalmado_d === 'true',
        espalmado_e: espalmado_e === 'true',
        martelo_d: martelo_d === 'true',
        martelo_e: martelo_e === 'true',
        queda_metatarso_d: queda_metatarso_d === 'true',
        queda_metatarso_e: queda_metatarso_e === 'true',
        tipo_marcha,
        marcha_descricao,
        joelho,
        articulacao,
        sensibilidade_dor
    };

    res.redirect('/etapa5'); 
};


export const etapa5 = (req: Request, res: Response) => {
    res.render('etapa5', { resumo: formData });
};

export const etapa5Post = (req: Request, res: Response) => {
    const { 
        unha_caracol, 
        unha_cunha, 
        unha_funil, 
        unha_gancho, 
        unha_involuta, 
        unha_normal, 
        unha_telha, 
        unha_torques, 
        pd_halux, 
        pd_2, 
        pd_3, 
        pd_4, 
        pd_5, 
        pe_halux, 
        pe_2, 
        pe_3, 
        pe_4, 
        pe_5, 
        onicoatrofia, 
        onicocriptose, 
        onicorrexe, 
        granuloma, 
        onicogrifose, 
        onicolise, 
        onicofose, 
        psoriase_ungueal, 
        onicomicose, 
        outros_alteracoes_ungueais 
    } = req.body;

    // Atualizando o objeto formData5 com os dados recebidos do formulário
    formData5.unha_caracol = unha_caracol || false;
    formData5.unha_cunha = unha_cunha || false;
    formData5.unha_funil = unha_funil || false;
    formData5.unha_gancho = unha_gancho || false;
    formData5.unha_involuta = unha_involuta || false;
    formData5.unha_normal = unha_normal || false;
    formData5.unha_telha = unha_telha || false;
    formData5.unha_torques = unha_torques || false;
    formData5.pd_halux = pd_halux || false;
    formData5.pd_2 = pd_2 || false;
    formData5.pd_3 = pd_3 || false;
    formData5.pd_4 = pd_4 || false;
    formData5.pd_5 = pd_5 || false;
    formData5.pe_halux = pe_halux || false;
    formData5.pe_2 = pe_2 || false;
    formData5.pe_3 = pe_3 || false;
    formData5.pe_4 = pe_4 || false;
    formData5.pe_5 = pe_5 || false;
    formData5.onicoatrofia = onicoatrofia || false;
    formData5.onicocriptose = onicocriptose || false;
    formData5.onicorrexe = onicorrexe || false;
    formData5.granuloma = granuloma || false;
    formData5.onicogrifose = onicogrifose || false;
    formData5.onicolise = onicolise || false;
    formData5.onicofose = onicofose || false;
    formData5.psoriase_ungueal = psoriase_ungueal || false;
    formData5.onicomicose = onicomicose || false;
    formData5.outros_alteracoes_ungueais = outros_alteracoes_ungueais || '';

    // Aqui você pode redirecionar ou fazer outra lógica de processamento
    res.redirect('/etapa6'); // Redirecionamento para a próxima etapa
};

export const etapa6 = (req: Request, res: Response) => {
    res.render('etapa6', { resumo: formData });
};

export const etapa6Post = (req: Request, res: Response) => {
    const {
        bromidrose,
        hidrose,
        desidrose,
        isquemia,
        mal_perfurante,
        edema,
        tinea,
        psoriase,
        tungiase,
        verruga_plantar,
        calo_dorsal,
        queratose,
        calo_plantar,
        hiperqueratose,
        calo_interdigital,
        perfusao_pd_normal,
        perfusao_pd_palido,
        perfusao_pd_cianotico,
        perfusao_pe_normal,
        perfusao_pe_palido,
        perfusao_pe_cianotico,
        erisipela,
        outras_alteracoes_pele
    } = req.body;

    // Atualizando o objeto formData6 com os dados recebidos do formulário
    formData6.bromidrose = bromidrose || false;
    formData6.hidrose = hidrose || false;
    formData6.desidrose = desidrose || false;
    formData6.isquemia = isquemia || false;
    formData6.mal_perfurante = mal_perfurante || false;
    formData6.edema = edema || false;
    formData6.tinea = tinea || false;
    formData6.psoriase = psoriase || false;
    formData6.tungiase = tungiase || false;
    formData6.verruga_plantar = verruga_plantar || false;
    formData6.calo_dorsal = calo_dorsal || false;
    formData6.queratose = queratose || false;
    formData6.calo_plantar = calo_plantar || false;
    formData6.hiperqueratose = hiperqueratose || false;
    formData6.calo_interdigital = calo_interdigital || false;
    formData6.perfusao_pd_normal = perfusao_pd_normal || false;
    formData6.perfusao_pd_palido = perfusao_pd_palido || false;
    formData6.perfusao_pd_cianotico = perfusao_pd_cianotico || false;
    formData6.perfusao_pe_normal = perfusao_pe_normal || false;
    formData6.perfusao_pe_palido = perfusao_pe_palido || false;
    formData6.perfusao_pe_cianotico = perfusao_pe_cianotico || false;
    formData6.erisipela = erisipela || false;
    formData6.outras_alteracoes_pele = outras_alteracoes_pele || '';

    // Aqui você pode redirecionar ou fazer outra lógica de processamento
    res.redirect('/etapa7'); // Redirecionamento para a próxima etapa
};

export const etapa7 = (req: Request, res: Response) => {
    res.render('etapa7', { resumo: formData });
};

export const etapa7Post = (req: Request, res: Response) => {
    const { endereco, cidade } = req.body;
    formData.endereco = endereco;
    formData.cidade = cidade;
    res.redirect('/etapa8');
};

export const etapa8 = (req: Request, res: Response) => {
    res.render('etapa8', { resumo: formData });
};

export const etapa8Post = (req: Request, res: Response) => {
    const { endereco, cidade } = req.body;
    formData.endereco = endereco;
    formData.cidade = cidade;
    res.redirect('/etapa9');
};

export const etapa9 = (req: Request, res: Response) => {
    res.render('etapa9', { resumo: formData });
};


export const submit = async (req: Request, res: Response) => {
    try {
        /*await Etapa1.create(formData);
        await Etapa2.create(formData2);
        await Etapa3.create(formData3);*/
        await Etapa4.create(formData4);
        
        
        
        
        res.send('Cadastro concluído com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};











