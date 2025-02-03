import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PeTiposLesoesInstance extends Model {
    id_pe_tipos_lesoes: number;
    id_pe: number;
    id_tipos_lesoes: number;
}

export const PeTiposLesoes = sequelize.define<PeTiposLesoesInstance>('PeTiposLesoes', {
    id_pe_tipos_lesoes: {
        type: DataTypes.INTEGER,
        primaryKey: true,  // Este campo será a chave primária com auto incremento
        autoIncrement: true
    },
    id_pe: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme necessidade
    },
    id_tipos_lesoes: {
        type: DataTypes.INTEGER,
        allowNull: false  // Ajuste conforme necessidade
    }
}, {
    tableName: 'pe_tipos_lesoes',
    timestamps: false
});
