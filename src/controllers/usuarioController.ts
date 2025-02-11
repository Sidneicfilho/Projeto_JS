// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import { Etapa1 } from '../models/Etapa1';
import { Etapa2 } from '../models/etapa2';
import { Etapa3 } from '../models/etapa3';
import { Etapa4 } from '../models/etapa4';
import { Etapa5 } from '../models/etapa5';
import { Etapa6 } from '../models/etapa6';




let formData: {
    nome?: string;
    endereco?: string; 
    bairro?: string; 
    cidade?: string; 
    estado?: string; 
    cep?: string; 
    tel_res?: string; 
    telefone?: string; 
    tel_emergencia?: string; 
    data_nascimento?: Date; 
    sexo?: string; 
    profissao?: string; 
    email?: string; 
    contato?: string;
 } = {};

let formData2: {
    id_cliente?: number;
    queixa_principal?: string;
    frequenta_podologo?: 'Sim' | 'Não';
    frequencia_visita_podologo?: string;
    uso_medicamento?: 'Sim' | 'Não';
    tipo_medicamento?: string;
    alergico?: 'Sim' | 'Não';
    alergia_substancia?: string;
    posicao_trabalho?: 'Em pé' | 'Sentado' | 'Andando';
    duracao_trabalho?: string;
    tempo_em_pe?: 'Sim' | 'Não';
    tempo_sentado?: 'Sim' | 'Não';
    tempo_caminhando?: 'Sim' | 'Não';
    numero_calcado?: string;
    tipo_calcado_diario?: 'Chinelo' | 'Tênis' | 'Outro';
    tipo_calcado_qual?: 'Ortopédico' | 'Descanso' | 'Outro';
    fumante?: 'Sim' | 'Não';
    menstruacao?: 'Sim' | 'Não';
    gestante?: 'Sim' | 'Não';
    amamentando?: 'Sim' | 'Não';
    dum?: Date;
    pratica_atividade_fisica?: 'Sim' | 'Não';
    frequencia_atividade_fisica?: string;
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
    Tipo_Pisada?: string[];
    Flexivel_D?: boolean;
    Flexivel_E?: boolean;
    Rigido_E?: boolean;
    Rigido_D?: boolean;
    Espalmado_D?: boolean;
    Espalmado_E?: boolean;
    Martelo_E?: boolean;
    Martelo_D?: boolean;
    Queda_Metatarso_E?: boolean;
    Queda_Metatarso_D?: boolean;
    Tipo_Marcha?: string;
    Joelho?: string;
    Articulacao?: string;
    Sensibilidade_Dor?: string;
} = {};

let formData5: {
    PD_halux?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PD_2?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PD_3?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PD_4?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PD_5?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PE_halux?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PE_2?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PE_3?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PE_4?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    PE_5?: 'Normal' | 'Involuído' | 'Telha' | 'Funil'| 'Gancho' | 'Torquês'| 'Caracol' | 'Cunha';
    Onicoatrofia?: boolean;
    Onicocriptose?:boolean;
    Onicorrexe?:boolean;
    Granuloma?: boolean;
    Onicogrifose?: boolean;
    Onicolise?: boolean;
    Onicofose?: boolean;
    Psoriase_ungueal?:boolean;
    Onicomicose?: boolean;
    outras_alteracoes?: Text;
} = {};

let formData6: {
    bromidrose?: boolean;
    hidrose?: boolean;
    desidrose?: boolean;
    isquemia?: boolean;
    mal_perfurante?: boolean;
    edema?: boolean;
    tinea?: boolean;
    psoriase?: boolean;
    tungiase?: boolean;
    verruga_plantar?: boolean;
    calo_dorsal?: boolean;
    querotose?: boolean;
    calo_plantar?: boolean;
    hiperqueratose?: boolean;
    calo_interdigital?: boolean;
 
    // Perfusão com valor inicial indefinido
    perfusao_PD?: 'Normal' | 'Pálido' | 'Cianótico';
    perfusao_PE?: 'Normal' | 'Pálido' | 'Cianótico';
 
    teve_erisipela?: 'Sim' | 'Não';
    outras_alteracoes?: string;
    comentarios?: string;
} = {};



export const etapa1 = (req: Request, res: Response) => {
    res.render('etapa1');
};

export const etapa1Post = async (req: Request, res: Response) => {
    const { 
      nome, endereco, bairro, cidade, estado, cep, tel_res, telefone, tel_emergencia, data_nascimento, sexo, profissao, email, contato
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
        pratica_atividade_fisica,
        frequencia_atividade_fisica,
        esporte_atividade,
        tipo_calcado_esporte
    } = req.body;

   
    // Preenche o restante dos dados
    formData2.queixa_principal = queixa_principal;
    formData2.frequenta_podologo = frequenta_podologo;
    formData2.frequencia_visita_podologo = frequencia_visita_podologo;
    formData2.uso_medicamento = uso_medicamento;
    formData2.tipo_medicamento = tipo_medicamento;
    formData2.alergico = alergico;
    formData2.alergia_substancia = alergia_substancia;
    formData2.posicao_trabalho = posicao_trabalho;
    formData2.duracao_trabalho = duracao_trabalho;
    formData2.tempo_em_pe = tempo_em_pe;
    formData2.tempo_sentado = tempo_sentado;
    formData2.tempo_caminhando = tempo_caminhando;
    formData2.numero_calcado = numero_calcado;
    formData2.tipo_calcado_diario = tipo_calcado_diario;
    formData2.tipo_calcado_qual = tipo_calcado_qual;
    formData2.fumante = fumante;
    formData2.menstruacao = menstruacao;
    formData2.gestante = gestante;
    formData2.amamentando = amamentando;
    formData2.dum = new Date(dum);
    formData2.pratica_atividade_fisica = pratica_atividade_fisica;
    formData2.frequencia_atividade_fisica = frequencia_atividade_fisica;
    formData2.esporte_atividade = esporte_atividade;
    formData2.tipo_calcado_esporte = tipo_calcado_esporte;
    
    // Redireciona para a próxima etapa
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
        Tipo_Pisada, 
        Flexivel_D, Flexivel_E, 
        Rigido_D, Rigido_E, 
        Espalmado_D, Espalmado_E, 
        Martelo_D, Martelo_E, 
        Queda_Metatarso_D, Queda_Metatarso_E, 
        Tipo_Marcha, 
        Joelho, 
        Articulacao, 
        Sensibilidade_Dor 
    } = req.body;

   formData4.Tipo_Pisada = Tipo_Pisada;
   formData4.Tipo_Marcha = Tipo_Marcha;
   formData4.Joelho = Joelho;
   formData4.Articulacao = Articulacao;
   formData4.Sensibilidade_Dor = Sensibilidade_Dor
   formData4.Flexivel_D = Flexivel_D;
   formData4.Flexivel_E = Flexivel_E;
   formData4.Rigido_D = Rigido_D;
   formData4.Rigido_E = Rigido_E;
   formData4.Espalmado_D = Espalmado_D;
   formData4.Espalmado_E = Espalmado_E;
   formData4.Martelo_E = Martelo_E;
   formData4.Martelo_D = Martelo_D;
   formData4.Queda_Metatarso_D = Queda_Metatarso_D;
   formData4.Queda_Metatarso_E = Queda_Metatarso_E;
   

    res.redirect('/etapa5'); 
};



export const etapa5 = (req: Request, res: Response) => {
    res.render('etapa5', { resumo: formData });
};

export const etapa5Post = (req: Request, res: Response) => {
    const { 
        PD_halux,
        PD_2,
        PD_3,
        PD_4,
        PD_5,
        PE_halux,
        PE_2,
        PE_3,
        PE_4,
        PE_5,
        Onicoatrofia,
        Onicocriptose,
        Onicorrexe,
        Granuloma,
        Onicogrifose,
        Onicolise,
        Onicofose,
        Psoriase_ungueal,
        Onicomicose,
        outras_alteracoes
    } = req.body
    // Atualizando o objeto formData5 com os dados recebidos do formulário
    formData5.PD_halux = PD_halux
    formData5.PD_2 = PD_2
    formData5.PD_3 = PD_3
    formData5.PD_4 = PD_4
    formData5.PD_5 = PD_5
    formData5.PE_halux = PE_halux
    formData5.PE_2 = PE_2
    formData5.PE_3 = PE_3
    formData5.PE_4 = PE_4
    formData5.PE_5 = PE_5
    formData5.Onicoatrofia = Onicoatrofia
    formData5.Onicocriptose = Onicocriptose
    formData5.Onicorrexe = Onicorrexe
    formData5.Granuloma = Granuloma
    formData5.Onicogrifose = Onicogrifose
    formData5.Onicolise = Onicolise
    formData5.Onicofose = Onicofose
    formData5.Psoriase_ungueal = Psoriase_ungueal
    formData5.Onicomicose = Onicomicose
    formData5.outras_alteracoes = outras_alteracoes;
   

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
        querotose,
        calo_plantar,
        hiperqueratose,
        calo_interdigital,
        perfusao_PD,
        perfusao_PE,
        teve_erisipela,
        outras_alteracoes,
        comentarios
    } = req.body;
 
    // Atribuindo os valores aos campos do formData6
    formData6.bromidrose = bromidrose;
    formData6.hidrose = hidrose;
    formData6.desidrose = desidrose;
    formData6.isquemia = isquemia;
    formData6.mal_perfurante = mal_perfurante;
    formData6.edema = edema;
    formData6.tinea = tinea;
    formData6.psoriase = psoriase;
    formData6.tungiase = tungiase;
    formData6.verruga_plantar = verruga_plantar;
    formData6.calo_dorsal = calo_dorsal;
    formData6.querotose = querotose;
    formData6.calo_plantar = calo_plantar;
    formData6.hiperqueratose = hiperqueratose;
    formData6.calo_interdigital = calo_interdigital;
    formData6.perfusao_PD = perfusao_PD;
    formData6.perfusao_PE = perfusao_PE;
    formData6.teve_erisipela = teve_erisipela;
    formData6.outras_alteracoes = outras_alteracoes;
    formData6.comentarios = comentarios;
 
   
 
    res.redirect('/etapa7');
};
 


export const etapa7 = (req: Request, res: Response) => {
    res.render('etapa7', { resumo: formData, formData2, formData3, formData4, formData5, formData6 });
};





export const submit = async (req: Request, res: Response) => {
    try {
        
        await Etapa1.create(formData);
        await Etapa2.create(formData2);
        await Etapa3.create(formData3);
        await Etapa4.create(formData4);
        await Etapa5.create(formData5);
        await Etapa6.create(formData6);
        
        
        res.send('Cadastro concluído com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};











