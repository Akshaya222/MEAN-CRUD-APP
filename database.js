const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/MEANCRUD',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("MongoDB Connection Successfull!!");
    }
    else{
        console.log("MongoDB connection failed");
    }
});

