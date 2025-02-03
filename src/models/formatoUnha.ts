import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface UnhaInstance extends Model {
    id_formato_unhas: number
    descricao: string
    
}

export const FormatoUnha = sequelize.define<UnhaInstance>("FormatoUnha", {
    id_formato_unhas: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
    
}, {
    tableName: 'formato_unhas',
    timestamps: false
})