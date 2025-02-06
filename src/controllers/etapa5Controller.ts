import { Request, Response } from 'express';



export const etapa5 = (req: Request, res: Response) => {
    res.render('etapa5');
};

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