import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ConsultaInstance extends Model {
    id_consulta: number;
    id_podologo: number;
    id_cliente: number;
    id_posicao_trabalho: number;
    id_palmilha: number;
    queixa_principal: string;
    frequencia_podologo: string;
    frequencia_visita_podologo: string;
    uso_medicamento: boolean;
    tipo_medicamento: string;
    possui_alergia: boolean;
    alergia_substancia: string;
    numero_calcado: number;
    tipo_calcado: string;
    fumante: boolean;
    gestante: boolean;
    amamentando: boolean;
    ciclo_menstrual: boolean;
    atividade_fisica: boolean;
    frequencia_atividade_fisica: string;
    tipo_esporte: string;
    calcado_esporte: string;
}

export const Consulta = sequelize.define<ConsultaInstance>('Consulta', {
    id_consulta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_podologo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_posicao_trabalho: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_palmilha: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    queixa_principal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    frequencia_podologo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    frequencia_visita_podologo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    uso_medicamento: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    tipo_medicamento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    possui_alergia: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    alergia_substancia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero_calcado: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo_calcado: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fumante: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    gestante: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    amamentando: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    ciclo_menstrual: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    atividade_fisica: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    frequencia_atividade_fisica: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo_esporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    calcado_esporte: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'consulta',
    timestamps: false
});
