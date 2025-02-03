import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface LadoPeInstance extends Model {
    id_lado_pe: number;
    descricao: string;
    
    
}

export const LadoPe = sequelize.define<LadoPeInstance>('LadoPe', {
    id_lado_pe: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },

    
}, {
    tableName: 'lado_pe',
    timestamps: false
});