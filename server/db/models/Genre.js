const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://admin:11031999@localhost:5432/base_of_books')

class Genre extends Model {}
Genre.init({
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'genre',
  tableName: 'genres',
  paranoid: true,
  createdAt: false,
  updatedAt: false,
  deletedAt: 'deleted_at'
});

module.exports = Genre
