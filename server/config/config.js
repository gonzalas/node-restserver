//Introducir puerto

process.env.PORT = process.env.PORT || 3000;



//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// Caducidad del Token

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// Seed de autenticación ('Secret') token

process.env.SEED = process.env.SEED || 'secret';


//Base de datos

let urlDB;

if (process.env.NODE_ENV === process.env.NODE_ENV) {

    urlDB = process.env.MONGO_URI;

} else if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
}


process.env.URLDB = urlDB;