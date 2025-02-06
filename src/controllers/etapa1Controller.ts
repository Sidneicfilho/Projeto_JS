import { Request, Response } from 'express';
import { Etapa1 } from '../models/Etapa1';

export const etapa1 = (req: Request, res: Response) => {
    res.render('etapa1');
};

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
