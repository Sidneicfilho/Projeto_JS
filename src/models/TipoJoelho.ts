import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoJoelhoInstance extends Model {
    id_tipo_joelho: number;
    descricao: string;
}

export const TipoJoelho = sequelize.define<TipoJoelhoInstance>('TipoJoelho', {
    id_tipo_joelho: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_joelho',
    timestamps: false
});
