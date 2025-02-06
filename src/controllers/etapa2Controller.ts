import { Etapa2 } from '../models/etapa2';
import { Request, Response } from 'express';


export const etapa2 = (req: Request, res: Response) => {
    res.render('etapa2');
};

let formData2: {
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
    
    res.redirect('/etapa3');
};
