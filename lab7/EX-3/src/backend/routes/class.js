const express = require('express');
const router = express.Router();
const {Student,AttendanceRecord} = require('../models');

// GET /classes/:id/attendance
router.get('/:id/attendance', async (req, res) => {
    try {
        const records = await AttendanceRecord.findAll({
            where: { ClassId: req.params.id },
            include: Student
        });
        res.json(records);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;