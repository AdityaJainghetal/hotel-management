const mongoose= require("mongoose");
const orderSchema=new mongoose.Schema({
   
    customername:String,
    amount:Number,
    email:String
})


module.exports = mongoose.model("order", orderSchema);