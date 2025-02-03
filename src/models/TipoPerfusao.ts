import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoPerfusaoInstance extends Model {
    id_tipo_perfusao: number;
    descricao: string;
}

export const TipoPerfusao= sequelize.define<TipoPerfusaoInstance>('TipoPerfusao', {
    id_tipo_perfusao: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_perfusao',
    timestamps: false
});
