const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    userpic:{type:String,required:true}
})

module.exports=mongoose.model("user", Userschema)