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