import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface DedosInstance extends Model {
    id_dedos: number;
    id_pe: number;
    flexivel: boolean;
    rigido: boolean;
    espalmado: boolean;
    martelo: boolean;
    queda_metatarso: boolean;
}

export const Dedos = sequelize.define<DedosInstance>('Dedos', {
    id_dedos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    flexivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Definindo um valor padrão
    },
    rigido: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Definindo um valor padrão
    },
    espalmado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Definindo um valor padrão
    },
    martelo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Definindo um valor padrão
    },
    queda_metatarso: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Definindo um valor padrão
    }
}, {
    tableName: 'dedos',
    timestamps: false
});
