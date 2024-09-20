const Student = require('../models/Student');


exports.addStudent=async(req,res)=>{
    try{
        console.log(req.body,'req.body')
        let student = new Student(req.body);
        await student.save();
        res.end('data added...')
    }catch(err){
        console.log(err)

    }
}