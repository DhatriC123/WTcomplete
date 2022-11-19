const mongoose=require('mongoose')


const signUpTemplate=new mongoose.Schema({
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
    // noOfSeats:{
    //     type:Integer,
    //     required:true
    // },
    seatType:{
        type:String,
        required:false
    },

    date:{
        type:Date,
        default:Date.now
    }
    // phoneno:{
    //     type:Int16Array
    //     required:true
    // }
})
module.exports=mongoose.model('mytable',signUpTemplate)



