const express = require('express');
const mongoose = require('mongoose');
const consign = require('consign');
require('dotenv').config();

module.exports = () =>{

    mongoose.connect(process.env.MONGO_CNSTRING, {
        useNewUrlParser: true
    });

    const db = mongoose.connection;
    
    db.on('connected', () => {
        console.log('Mongoose default connection is open');
    });

    process.on('SIGINT', () => {
        db.close(() => {
            console.log(
            'Mongoose default connection is disconnected due to application termination'
            );
            process.exit(0);
        });
    });
    
    const app = express();
    app.use(express.json())

    consign()
        .include('src/controllers')
        .into(app)

    return app;    
}