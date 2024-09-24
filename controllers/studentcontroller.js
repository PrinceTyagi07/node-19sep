const Student = require('../models/Student');


exports.addStudent = async (req, res) => {
    try {
        console.log(req.body, 'req.body')
        let student = new Student(req.body);
        await student.save();
        res.render('student')
        // res.end('data added...')
    } catch (err) {
        console.log(err)

    }
}

exports.getstudents = async (req, res) => {
    try {
        let student = await Student.find();
        console.log(student);
        // res.send(student)
        res.render('studentdata', { students: student })
    } catch (error) {
        console.log(err)

    }
}

// get student the student by id  and edit the student detail
exports.getstudentbyid = async (req, res) => {
    try {
        const id = req.params.id;
        let student = await Student.findById(id);
        console.log(student);
        res.render('studentForEdit', { student: student })
        // res.json(student);
        // res.send(student,student )
    } catch (error) {
        console.log(error)
    }
}
// update student 

exports.updatestudent = async (req, res) => {
    try {
        let id = req.params.id;
        console.log(req.body)
        let student = await Student.findByIdAndUpdate(id, { ...req.body }, { new: true });
        await student.save()
        console.log(student);
        let students = await Student.find({});

        // res.send("<h1>Student updated sucessfully</h1>")
        res.render('studentdata', { students: students })

    } catch (error) {
        console.log(error)
    }
}

exports.delete=async (req, res)=>{
    try {
        let id = req.params.id;
        await Student.deleteOne({_id:id});

        let students = await Student.find({});

        res.render('studentdata', { students: students })
    } catch (error) {
        console.log(error)
    }
}