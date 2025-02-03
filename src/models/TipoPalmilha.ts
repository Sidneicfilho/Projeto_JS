import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoPalmilhaInstance extends Model {
    id_tipo_palmilha: number;
    descricao: string;
}

export const TipoPalmilha = sequelize.define<TipoPalmilhaInstance>('TipoPalmilha', {
    id_tipo_palmilha: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_marcha',
    timestamps: false
});
