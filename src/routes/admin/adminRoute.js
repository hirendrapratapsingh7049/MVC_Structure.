const express=require('express');
const { adminController } = require('../../controllers/admin/adminController');


const { studentValidator } = require('../../validators/student');
const aminRouter=express.Router();


aminRouter.get('/save_student',studentValidator,adminController)

module.exports={aminRouter}
