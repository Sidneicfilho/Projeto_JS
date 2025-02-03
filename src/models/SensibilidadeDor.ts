import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface SensibilidadeDorInstance extends Model {
    id_sensibilidade_dor: number;
    descricao: string;
}

export const SensibilidadeDor = sequelize.define<SensibilidadeDorInstance>('SensibilidadeDor', {
    id_sensibilidade_dor: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'sensibilidade_dor',
    timestamps: false
});
