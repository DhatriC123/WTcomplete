const mongoose=require('mongoose')


const signUpTemplate=new mongoose.Schema({
    phoneno:{
        type:Number,
        required:true
    },


    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    noOfSeats:{
        type:Number,
        required:true
    },
    // seatType:{
    //     type:String,
    //     required:false
    // },

    date:{
        type:Date,
        default:Date.now
    }
   
})
module.exports=mongoose.model('mytable',signUpTemplate)



