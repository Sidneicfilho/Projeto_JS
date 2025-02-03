import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ArticulacaoInstance extends Model {
    id: number;
    descricao: string;
}

export const Articulacao = sequelize.define<ArticulacaoInstance>('Articulacao', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'articulacao',
    timestamps: false
});
