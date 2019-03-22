const mongoose=require("mongoose");
const Hotel=require('../models/hotel') 
module.exports = (app) =>{


    app.get("/api",function(req,res)
    {
        const mysort={"name":1}
        Hotel.find({},function(err,allhotels)
        {
            if(err)console.log(err);
            res.json({
                data:allhotels
            })
        }).sort(mysort);
    })
app.get("/",function(req,res)
{
    // const mysort={"price":1}
    var query = { price:500 };
    Hotel.find({},function(err,allhotels)
   {
       if(err)
       {
           console.log(err);
       }
       {
     res.render("hotellist",{allhotels:allhotels});//req.user will have the name of the user who is logged in      
       }
   }).sort({"price":1})
})
app.get("/api/addhotel",function(req,res)
{
    res.render("addhotel");
})
app.post("/api/addhotel",function(req,res)
{
    if(!req.body.name) {
        return res.status(400).send({
          success: 'false',
          messsage: 'name is required'
        });
      } else if(!req.body.image) {
        return res.status(400).send({
          success: 'false',
          message: 'image is required'
        });
      }
      else if(!req.body.city) {
        return res.status(400).send({
          success: 'false',
          message: 'city is required'
        });
      }
      else if(!req.body.price) {
          return res.status(400).send({
            success: 'false',
            message: 'price is required'
          });
        }
        name=req.body.name;
        image=req.body.image;
        city=req.body.city;
        price=req.body.price;
    
        var newhotel={name:name,image:image,city:city,price:price};
        Hotel.create(newhotel,function(err,newhotel)
        {
            if(err)console.log(err);
            else{
                console.log(newhotel);
                // return res.json(newhotel);
               return res.redirect("/api"); 
            }
        })
  
    })


}