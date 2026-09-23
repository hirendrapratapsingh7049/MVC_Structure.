
const mongoose=require('mongoose');
const env=require('dotenv');
env.config();


mongoose.connect(process.env.MONGO_URI).then(()=>{

    console.log('connected')
}
).catch(()=>{

    console.log('error',e)
})


module.exports={mongoose}
