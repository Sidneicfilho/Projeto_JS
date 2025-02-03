import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ConsultaPalmilhaInstance extends Model {
    id_consulta_tipo_palmilha: number;
    id_tipo_palmilha: number;
    id_palmilha: number;
}

export const ConsultaPalmilha = sequelize.define<ConsultaPalmilhaInstance>('ConsultaPalmilha', {
    id_consulta_tipo_palmilha: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    id_tipo_palmilha: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    id_palmilha: {
        type: DataTypes.INTEGER,
        allowNull: false 
    }
}, {
    tableName: 'consulta_tipo_palmilha',
    timestamps: false
});