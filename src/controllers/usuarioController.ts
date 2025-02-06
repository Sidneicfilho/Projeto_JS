// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import { Etapa1 } from '../models/Etapa1';
import { Etapa2 } from '../models/etapa2';
import { Etapa3 } from '../models/etapa3';
import { Etapa4 } from '../models/etapa4';
import { Etapa5 } from '../models/etapa5';
import { Etapa6 } from '../models/etapa6';
import * as etapa1Controller from '../controllers/etapa1Controller'
import * as etapa2Controller from '../controllers/etapa2Controller'
import * as etapa3Controller from '../controllers/etapa3Controller'
import * as etapa4Controller from '../controllers/etapa4Controller'
import * as etapa5Controller from '../controllers/etapa5Controller'
import * as etapa6Controller from '../controllers/etapa6Controller'
import * as etapa7Controller from '../controllers/etapa7Controller'







export const submit = async (req: Request, res: Response) => {
    try {
        await Etapa1.create(formData);
        await Etapa2.create(formData2);
        await Etapa3.create(formData3);
        await Etapa4.create(formData4);
        await Etapa5.create(formData5);
        
        
        
        
        res.send('Cadastro concluído com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};











