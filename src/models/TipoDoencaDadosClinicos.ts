import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipoDoencaDadosClinicosInstance extends Model {
    id_tipo_doenca_dados_clinicos: number;
    descricao: string;
}

export const TipoDoencaDadosClinicos = sequelize.define<TipoDoencaDadosClinicosInstance>('TipoDoencaDadosClinicos', {
    id_tipo_doenca_dados_clinicos: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_doenca_dados_clinicos',
    timestamps: false
});
