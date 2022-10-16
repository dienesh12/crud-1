const mongoose = require(`mongoose`)

const detailSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter the name']
    },
    rollno:{
        type:String,
        required:[true, 'Please enter your rollno'],
        //unique:true
    },
    emailID:{
        type:String,
        required:[true, 'Please enter your E-Mail'],
        //unique:true
    },
    photo:{
        type:String,
    },
},
{
    timestamps : true
}
)

module.exports = mongoose.model('Detail',detailSchema)