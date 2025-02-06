import { Request, Response } from 'express';


export const etapa4 = (req: Request, res: Response) => {
    res.render('etapa4', { resumo: formData4 });
};


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