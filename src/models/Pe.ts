import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PeInstance extends Model {
    id_pe: number;
    id_informacoes_podologicas: number;
    id_tipo_artelhos: number;
    id_tipo_perfusao: number;
    observacoes: string;
    condicoes_urugueais: string;
}

export const Pe = sequelize.define<PeInstance>('Pe', {
    id_pe: {
        type: DataTypes.INTEGER,
        primaryKey: true,  // Este será o campo chave primária com auto incremento
        autoIncrement: true
    },
    id_informacoes_podologicas: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme necessidade
    },
    id_tipo_artelhos: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme necessidade
    },
    id_tipo_perfusao: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme necessidade
    },
    observacoes: {
        type: DataTypes.STRING,
        allowNull: true  // Ajuste conforme necessidade
    },
    condicoes_urugueais: {
        type: DataTypes.STRING,
        allowNull: true  // Ajuste conforme necessidade
    }
}, {
    tableName: 'pe',
    timestamps: false
});
