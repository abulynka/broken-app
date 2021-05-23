const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    operatorsAliases: false
});

sequelize.authenticate().then(
    () => {
        console.log("Connected to DB");
    },

    err => {
        console.log(`Error: ${err}`);
    }
);

module.exports = sequelize;
