module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017/Items',
    jwtSecret: process.env.JWT_SECRET || 'mysecret'
};
