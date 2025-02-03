import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoPisadaInstance extends Model {
    id_tipo_pisada: number;
    descricao: string;
}

export const TipoPisada= sequelize.define<TipoPisadaInstance>('TipoPisada', {
    id_tipo_pisada: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_pisada',
    timestamps: false
});
