import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface InformacoesPodologicaInstance extends Model {
    id_informacoes_podologicas: number;
    id_consulta: number;
    enrisipela: string;
    observacoes: string
    
}

export const InformacoesPodologica = sequelize.define<InformacoesPodologicaInstance>('InformacoesPodologica', {
    id_informacoes_podologicas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    id_consulta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    enrisipela: {
        type: DataTypes.STRING,
        allowNull: false
    },
    observacoes: {
        type: DataTypes.STRING,
        allowNull: false
    },

    
}, {
    tableName: 'informacoes_podologicas',
    timestamps: false
});