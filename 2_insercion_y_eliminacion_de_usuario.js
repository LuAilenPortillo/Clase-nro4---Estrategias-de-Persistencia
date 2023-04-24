const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'lucila', 'lucila', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/* inserta un usuario y elimina otro*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'David',
    lastName: 'Sánchez'
  }))
  .then(() => Cars.destroy({
    where: {
      id: 1
    }
  }))
  .then(() => {
    console.log("Done");
  });