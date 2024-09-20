const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: false }))
const studentcontroller= require('../controllers/studentcontroller')
router.get("/", (req, res) => {
    res.render('home')
})
router.post("/add/student",studentcontroller.addStudent)
module.exports = router;