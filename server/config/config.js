//Introducir puerto

process.env.PORT = process.env.PORT || 3000;



//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Base de datos

let urlDB;

if (process.env.NODE_ENV === process.env.NODE_ENV) {

    urlDB = process.env.MONGO_URI;

} else if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
}


process.env.URLDB = urlDB;

// mongodb+srv://gonza:eIcZIPEKmK3dTITo@cluster0-pudqx.mongodb.net/cafe?retryWrites=true&w=majority