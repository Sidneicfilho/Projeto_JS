import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

// Definição da interface do modelo DadosClinicos
export interface DadosClinicosInstance extends Model {
    id_dados_clinicos: number;
    id_consulta: number;
    data_ultima_consulta: Date;
    osteoporose?: boolean;
    renal?: boolean;
    epilepsia?: boolean;
    quimioRadio?: boolean;
    hipotiroidismo?: boolean;
    hepatite?: boolean;
    onco?: boolean;
    cardiopatia?: boolean;
    hipertensao?: boolean;
    reumatismo?: boolean;
    hanseniase?: boolean;
    cirurgiaMMII?: boolean;
    marcaPasso?: boolean;
    hipotensao?: string;
    insulina?: string;
    dietaHidrica?: string;
    injetavel?: boolean;
    dietaAlimentar?: boolean;
    viaOral?: boolean;
    taxaGlicemica?: string;
    vascular?: boolean;
    diagnostico: string;
    doencas_cronicas: string;
}

// Definição do modelo Sequelize
export const DadosClinicos = sequelize.define<DadosClinicosInstance>('DadosClinicos', {
    id_dados_clinicos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_consulta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    data_ultima_consulta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    osteoporose: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    renal: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    epilepsia: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    quimioRadio: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    hipotiroidismo: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    hepatite: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    onco: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    cardiopatia: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    hipertensao: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    reumatismo: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    hanseniase: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    cirurgiaMMII: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    marcaPasso: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    hipotensao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    insulina: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dietaHidrica: {
        type: DataTypes.STRING,
        allowNull: true
    },
    injetavel: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    dietaAlimentar: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    viaOral: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    taxaGlicemica: {
        type: DataTypes.STRING,
        allowNull: true
    },
    vascular: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    diagnostico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    doencas_cronicas: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'dados_clinicos',
    timestamps: false
});