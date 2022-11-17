const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectTOMongo=()=>
{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected TO Mongo successfull");
    })
}
module.exports = connectTOMongo;