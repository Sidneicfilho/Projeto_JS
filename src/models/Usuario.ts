// src/models/Usuario.ts
import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface UsuarioInstance extends Model {
    id: number;
    nome: string;
    email: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    tel_res: string;
    telefone: string;
    tel_emergencia: string;
    contato: string;
    data_nascimento: Date;
    profissao: string;
    created_at: Date;
  }
  
  export const Usuario = sequelize.define<UsuarioInstance>("Usuario", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tel_res: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tel_emergencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    profissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cliente',
    timestamps: false
  });