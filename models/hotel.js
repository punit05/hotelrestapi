const mongoose = require('mongoose');
const { Schema }=mongoose;



const userSchema = new Schema({
   name:String,
   image:String,
   city:String,
   price:Number

});
//creating the collection users
module.exports=mongoose.model("User",userSchema);
