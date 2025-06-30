const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Author extends Model {}

Author.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Author'
});

module.exports = Author;