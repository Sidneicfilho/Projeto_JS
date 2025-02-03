import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PeTipoPisadaInstance extends Model {
    id_pe_tipo_pisada: number;
    id_tipo_pisada: number;
    id_pe: number;
}

export const PeTipoPisada = sequelize.define<PeTipoPisadaInstance>('PeTipoPisada', {
    id_pe_tipo_pisada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  // Este campo será a chave primária com auto incremento
    },
    id_tipo_pisada: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme a necessidade, se não for obrigatório, defina como true
    },
    id_pe: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme a necessidade
    }
}, {
    tableName: 'pe_tipo_pisada',
    timestamps: false
});
