import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoArtelhosInstance extends Model {
    id_tipo_artelhos: number;
    descricao: string;
}

export const TipoArtelhos = sequelize.define<TipoArtelhosInstance>('TipoArtelhos', {
    id_tipo_artelhos: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_artelhos',
    timestamps: false
});
