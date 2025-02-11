// types.d.ts
import 'express-session';

declare module 'express-session' {
    interface SessionData {
        id_cliente?: number; // Adiciona a propriedade id_cliente ao tipo SessionData
    }
}