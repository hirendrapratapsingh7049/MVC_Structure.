const { validationResult } = require("express-validator");
const { Students } = require("../../models/student");

let adminController = (req, res) => {

   let errors = validationResult(req);

   if (!errors.isEmpty()) {

     const studentObj = new Students({ name:req.query.name, surname:req.query.surname });
  studentObj
    .save()
    .then((d) =>
      res.status(200).json({
        msg: "inserted successfully",
      }),
    )
    .catch((e) => {
      res.status(400).json({
        msg: "error",
        data: e,
      });
    });
    
  }else{
    

     res.status(400).json({
        msg: "Validation Error",
        data:error
        ,
      });
  }
 
};

module.exports = { adminController };
