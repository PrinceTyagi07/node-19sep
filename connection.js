const mongoose = require('mongoose');
connection = async () => {
    try {
       let connect = await mongoose.connect('mongodb://127.0.0.1:27017/batch1_view', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("db connected sucessfully ")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connection