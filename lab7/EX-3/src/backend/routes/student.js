const express = require('express');
const router = express.Router();
const { AttendanceRecord} = require('../models');


// GET /students/:id/attendance
router.get('/:id/attendance', async (req, res) => {
    try {
        const records = await AttendanceRecord.findAll({
            where: { StudentId: req.params.id }
        });
        res.json(records);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;