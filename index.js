const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

// Use Api routes in the App


mongoose.connect("mongodb://punit5:hometown5@ds121026.mlab.com:21026/hotelrestfulapi",function(err)
{
    if(err)console.log(err);
    else 
    {
        console.log("CONNECTION SUCCESSFUL")
    }
});
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
 app.set("view engine","ejs");

 
 // Use Api routes in the App

 
 require("./routes/hotelroute")(app);
 
const PORT=process.env.port||5000;

app.listen(PORT,function(err)
{
    if(err)console.log(err);
    else console.log(`WOOHOO Server is running on port ${PORT}`)
});