import { Etapa3 } from '../models/etapa3';
import { Request, Response } from 'express';

export const etapa3 = (req: Request, res: Response) => {
    res.render('etapa3');
};

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

