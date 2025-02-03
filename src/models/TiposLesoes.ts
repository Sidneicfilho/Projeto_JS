import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TiposLesoesInstance extends Model {
    id_tipos_lesoes: number;
    descricao: string;
}

export const TiposLesoes= sequelize.define<TiposLesoesInstance>('TiposLesoes', {
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
