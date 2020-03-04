// Creating our Natures model
module.exports = function(sequelize, DataTypes) {
  var Nature = sequelize.define("natures", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    increase: {
      type: DataTypes.STRING,
      allowNull: false
    },
    decrease: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Nature;
};
