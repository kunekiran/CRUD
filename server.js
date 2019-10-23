exp=require("express")
app=exp()
app.listen(1000)
cr=require("cors")
app.use(cr())
mj=require("mongojs")
bp=require("body-parser")
app.use(bp.json())
ObjectId=require("mongojs").ObjectId
con=mj("mongodb://localhost:27017/newdb")
//////////Get data
app.get("/getdata",(req,res)=>{
con.tbl_user.find(function(err,result){
 if(err)
 res.send(err)
 else
 res.send(result)
})
})
///////Insert
app.post("/insdata",(req,res)=>{
con.tbl_user.save(req.body,()=>{
    res.send({result:"Insered"})
})
})
//////Del all
app.delete("/delallrec",(req,res)=>{
con.tbl_user.remove()
res.send({result:"Deleted"})
})
///Del one rec
app.post("/delonerow",(req,res)=>{
    console.log(req.body.rid)
    con.tbl_user.remove({_id:ObjectId(req.body.rid)})
    res.send({result:"Deleted"})
})
///Update
app.post("/updaterec",(req,res)=>{
    console.log(req.body)
    con.tbl_user.update({_id:ObjectId(req.body.rid)},{uname:req.body.un,city:req.body.ct})
res.send({result:"Updated"})
})






