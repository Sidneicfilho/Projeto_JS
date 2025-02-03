import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface LadoTipoPeInstance extends Model {
    id_lado_tipo_pe: number;
    id_tipo_artelhos: number;
    id_tipo_perfusao: number;
    id_lado_pe: number;
    id_pe: number;
}

export const LadoTipoPe = sequelize.define<LadoTipoPeInstance>('LadoTipoPe', {
    id_lado_tipo_pe: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Somente este campo deve ter autoIncrement
    },
    id_tipo_artelhos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_perfusao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_lado_pe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_pe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'lado_tipo_pe',
    timestamps: false,
});
