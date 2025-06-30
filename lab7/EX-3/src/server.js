const express = require('express');
const app = express();
const attendanceRoutes = require('./backend/routes/attendance');
const classRoutes = require('./backend/routes/class');
const studentRoutes = require('./backend/routes/student');
const sequelize = require('./backend/config/database');
require('./backend/models'); // Ensure models and relationships are loaded

app.use(express.json());
app.use('/attendance', attendanceRoutes);
app.use('/classes', classRoutes);
app.use('/students', studentRoutes);

// Sync database and start server
const PORT = 3000;
sequelize.sync().then(async () => {
    const { Student, Class } = require('./backend/models');
    // Create sample students
    await Student.findOrCreate({ where: { name: 'Alice' } });
    await Student.findOrCreate({ where: { name: 'Bob' } });
    // Create sample classes
    await Class.findOrCreate({ where: { name: 'Math' } });
    await Class.findOrCreate({ where: { name: 'Science' } });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});