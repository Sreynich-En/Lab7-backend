const Student = require('./student');
const Class = require('./class');
const AttendanceRecord = require('./attendanceRecord');

//Relationships
Student.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Student);

Class.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Class);

module.exports = {Student, Class, AttendanceRecord};