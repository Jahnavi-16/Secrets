import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
let app = express();
let port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/',async(req,res)=>{
    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/random")
        res.render("index.ejs", { secret: result.data.secret,user:result.data.user});
    }catch(error){
        res.render("index.ejs", { secret: error.response });
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });