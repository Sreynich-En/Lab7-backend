const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class Student extends Model {}

Student.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Student'
});

module.exports = Student;