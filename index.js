import axios from "axios";
import express from "express";
import cors from "cors";

const app=express();
app.use(cors());

// sends get request to API
app.get("/",async(req,res)=>{
    const temp=await axios.get("https://randomuser.me/api/");

    const response=temp.data.results[0];

    const user={
        title:response.name.title,
        firstName:response.name.first,
        lastName:response.name.last,
        phone:response.phone,
        image:response.picture.medium
    }
    
    res.json(user);
})

app.listen(3000, () => console.log(`Port: 3000`));