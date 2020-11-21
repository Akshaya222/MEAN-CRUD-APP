var mongoose=require('mongoose');
var contactSchema=mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    }
});
module.exports=mongoose.model('contact',contactSchema);