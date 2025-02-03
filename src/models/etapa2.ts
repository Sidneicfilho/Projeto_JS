import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa2Instance extends Model {
    id: number;
    id_cliente:number;
    queixa_principal: string;
    frequenta_podologo: 'Sim' | 'Não';
    frequencia_podologo: string;
    uso_medicamentos: 'Sim' | 'Não';
    quais_medicamentos: string;
    alergico: 'Sim' | 'Não';
    quais_substancias: string;
    posicao_trabalho: 'Em pé' | 'Sentado' | 'Andando';
    duracao_trabalho: string;
    tempo_em_pe: 'Sim' | 'Não';
    tempo_sentado: 'Sim' | 'Não';
    tempo_caminhando: 'Sim' | 'Não';
    numero_calcado: string;
    tipo_calcado_diario: 'Chinelo' | 'Tênis' | 'Outro';
    tipo_calcado_qual: 'Ortopédica' | 'Descanso' | 'Outro';
    fumante: 'Sim' | 'Não';
    ciclo_menstruacao_regular: 'Sim' | 'Não';
    gestante: 'Sim' | 'Não';
    amamentando: 'Sim' | 'Não';
    dum: Date;
    pratica_atividade_fisica: 'Sim' | 'Não';
    frequencia_atividade_fisica: string;
    esporte_atividade: string;
    tipo_calcado_esporte: string;
}

export const Etapa2 = sequelize.define<Etapa2Instance>('Etapa2', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'cliente', // Nome da tabela referenciada
            key: 'id_cliente' // Nome da coluna referenciada
        }
    },
    queixa_principal: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    frequenta_podologo: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    frequencia_podologo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    uso_medicamentos: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    quais_medicamentos: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    alergico: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    quais_substancias: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    posicao_trabalho: {
        type: DataTypes.ENUM('Em pé', 'Sentado', 'Andando'),
        allowNull: true
    },
    duracao_trabalho: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tempo_em_pe: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    tempo_sentado: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    tempo_caminhando: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    numero_calcado: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    tipo_calcado_diario: {
        type: DataTypes.ENUM('Chinelo', 'Tênis', 'Outro'),
        allowNull: true
    },
    tipo_calcado_qual: {
        type: DataTypes.ENUM('Ortopédica', 'Descanso', 'Outro'),
        allowNull: true
    },
    fumante: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    ciclo_menstruacao_regular: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    gestante: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    amamentando: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    dum: {
        type: DataTypes.DATE,
        allowNull: true
    },
    pratica_atividade_fisica: {
        type: DataTypes.ENUM('Sim', 'Não'),
        allowNull: true
    },
    frequencia_atividade_fisica: {
        type: DataTypes.STRING,
        allowNull: true
    },
    esporte_atividade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo_calcado_esporte: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    
    tableName: 'dados_gerais', // Nome da tabela no banco de dados
    timestamps: false // Desabilita os campos `createdAt` e `updatedAt`
});

