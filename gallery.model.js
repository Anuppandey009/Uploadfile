const mongoose=require(`mongoose`)

const Galleryschema=new mongoose.Schema({
    picture:[{type:String ,required:true}],

    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})


module.exports=mongoose.model("gallery",Galleryschema)