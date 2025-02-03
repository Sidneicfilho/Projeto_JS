import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PodologoInstance extends Model {
    id_podologo: number;
    nome: string;
    telefone: string;  // Corrigido para "telefone"
    email: string;
    especializacao: string;
}

export const Podologo = sequelize.define<PodologoInstance>('Podologo', {
    id_podologo: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true  // Validação do email para garantir que seja um formato válido
        }
    },
    especializacao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'podologo',
    timestamps: false
});
