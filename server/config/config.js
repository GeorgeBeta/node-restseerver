// *************************************
//             PUERTO
// *************************************

process.env.PORT = process.env.PORT || 3000;

// *************************************
//    Entorno y BBDD a mi manera
// *************************************

if (process.env.NODE_ENV === 'production') {
    urlDB = process.env.MONGO_URI;
} else {
    urlDB = 'mongodb://localhost:27017/cafe';
}
process.env.URLDB = urlDB;

// *************************************
//    Caducidad de la autenticación
// *************************************
// 60 seg x 60 min x 24 horas x 30 días = 1 mes
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// *************************************
//    Generador de Token - SEED
// *************************************
process.env.SEED = process.env.SEED || 'semilla-desarrollo';