import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoMarchaInstance extends Model {
    id_tipo_marcha: number;
    descricao: string;
}

export const TipoMarcha = sequelize.define<TipoMarchaInstance>('TipoMarcha', {
    id_tipo_marcha: {
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
