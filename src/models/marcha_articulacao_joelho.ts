import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface MarchaArticulacaojoelhoInstance extends Model {
    id_marcha_articulacao_joelho: number;
    id_informacoes_podologicas: number;
    id_tipo_marcha: number;
    id_tipo_joelho: number;
    id_articulacao: number;
    id_sensibilidade_dor: number;
}

export const MarchaArticulacaojoelho = sequelize.define<MarchaArticulacaojoelhoInstance>('MarchaArticulacaojoelho', {
    id_marcha_articulacao_joelho: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Este campo deve ser a chave primária com incremento automático
    },
    id_informacoes_podologicas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_marcha: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_joelho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_articulacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_sensibilidade_dor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'marcha_articulacao_joelho',
    timestamps: false
});
