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


/* inserta un usuario y actualiza varios registros*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Leo',
    lastName: 'Messi'
  }))
  .then(() => Cars.update({ firstName: "Martina" }, 
  {
    where: {
      lastName: 'Flores'
    }
  }))
  .then(() => Cars.update({ firstName: "Lionel" }, 
  {
    where: {
      lastName: 'Messi'
    }
  }))
  .then(() => Cars.update({ lastName: "García" }, 
  {
    where: {
        firstName: 'David'
    }
  }))
  .then(() => {
    console.log("Done");
  });