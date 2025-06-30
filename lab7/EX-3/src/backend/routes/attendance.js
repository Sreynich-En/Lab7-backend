const express = require('express');
const router = express.Router();
const {Student, Class, AttendanceRecord} = require('../models');

// POST /attendance?studentId=1&classId=1&date=2025-06-17&status=present
router.post('/', async (req, res) => {
    const { studentId, classId, date, status } = req.query;
    try {
        const record = await AttendanceRecord.create({ StudentId: studentId, ClassId: classId, date, status });
        res.json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /attendance?studentId=1&date=2025-06-17
router.get('/', async (req, res) => {
    const { studentId, date } = req.query;
    try {
        const record = await AttendanceRecord.findOne({ where: { StudentId: studentId, date } });
        res.json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;