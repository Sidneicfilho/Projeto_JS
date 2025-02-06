import { Request, Response } from 'express';



export const etapa6 = (req: Request, res: Response) => {
    res.render('etapa6');
};

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
 
