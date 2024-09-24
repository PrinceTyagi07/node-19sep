const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: false }))
const studentcontroller= require('../controllers/studentcontroller')
router.get("/", (req, res) => {
    res.render('home')
})
router.post("/add/student",studentcontroller.addStudent)
router.get("/students",studentcontroller.getstudents)
// route for edit 
router.get('/student/edit/page/:id',studentcontroller.getstudentbyid)
router.post('/update/student/:id',studentcontroller.updatestudent)
router.get("/delete/student/:id",studentcontroller.delete)
module.exports = router;