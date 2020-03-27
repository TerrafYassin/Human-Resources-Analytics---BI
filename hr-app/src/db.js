const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HR-Project',(err)=>{
    if(!err)
        console.log("Connection successful!");
    else
        console.log("error in connection "+ JSON.stringify(err,undefined,2));
});