import { Etapa1 } from '../models/Etapa1';
import { Etapa2 } from '../models/etapa2';
import { Etapa3 } from '../models/etapa3';
import { Etapa4 } from '../models/etapa4';
import { Etapa5 } from '../models/etapa5';
import { Etapa6 } from '../models/etapa6';

// Defina as associações
Etapa1.hasOne(Etapa2, {
    foreignKey: 'id_cliente',
    as: 'etapa2'
});
Etapa1.hasOne(Etapa3, {
    foreignKey: 'id_cliente',
    as: 'etapa3'
});
Etapa1.hasOne(Etapa4, {
    foreignKey: 'id_cliente',
    as: 'etapa4'
});
Etapa1.hasOne(Etapa5, {
    foreignKey: 'id_cliente',
    as: 'etapa5'
});
Etapa1.hasOne(Etapa6, {
    foreignKey: 'id_cliente',
    as: 'etapa6'
});

Etapa2.belongsTo(Etapa1, {
    foreignKey: 'id_cliente',
    as: 'etapa1'
});
Etapa3.belongsTo(Etapa1, {
    foreignKey: 'id_cliente',
    as: 'etapa1'
});
Etapa4.belongsTo(Etapa1, {
    foreignKey: 'id_cliente',
    as: 'etapa1'
});
Etapa5.belongsTo(Etapa1, {
    foreignKey: 'id_cliente',
    as: 'etapa1'
});
Etapa6.belongsTo(Etapa1, {
    foreignKey: 'id_cliente',
    as: 'etapa1'
});
