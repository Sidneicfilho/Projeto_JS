import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PosicaoTrabalhoInstance extends Model {
    id_posicao_trabalho: number;
    descricao: string;
}

export const PosicaoTrabalho = sequelize.define<PosicaoTrabalhoInstance>('PosicaoTrabalho', {
    id_posicao_trabalho: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'posicao_trabalho',
    timestamps: false
});
