
const {mongoose} =require('../config/db')

 let studentSchema= { name: String ,surname:String}

const Students = mongoose.model('students',studentSchema);

module.exports={Students}