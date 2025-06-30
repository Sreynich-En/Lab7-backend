const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class AttendanceRecord extends Model {}

AttendanceRecord.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
},{
    sequelize,
    modelName: 'AttendanceRecord'
});

module.exports = AttendanceRecord;