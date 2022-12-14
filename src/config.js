const dotenv=require('dotenv').config();

module.exports={
    NODE_ENV:process.env.NODE_ENV || 'development',
    PORT:process.env.PORT || 3000,
    DB_HOST:process.env.DB_HOST || 'localhost',
    DB_USER:process.env.DB_USER || 'root',
    DB_PASSWORD:process.env.DB_PASSWORD || '12345',
    DB_NAME:process.env.DB_NAME || 'mundial',
    DB_PORT: process.env.DB_PORT || 3306
};

