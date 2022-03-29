const { DataTypes , Sequelize} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    plate_resume: {
      type: DataTypes.STRING,
      allowNull:false,
    },

    punctuation: {
      type: DataTypes.INTEGER, 
    },

    healty_level: {
      type: DataTypes.INTEGER,
    },

    steps: {
      type: DataTypes.STRING,
    }
  });


  sequelize.define('type',{
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
    }
  });
};
