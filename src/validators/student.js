const { check} = require('express-validator');


let studentValidator=[check('Name', 'First Name is required').notEmpty(),
check('SurName', 'SurName is required').notEmpty() 
]

module.exports={studentValidator}