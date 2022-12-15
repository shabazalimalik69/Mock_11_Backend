require("dotenv").config()
const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT || 8000;
const connectDB = require("./Config/db")
const productRouter = require('./Routes/allRoutes')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/',productRouter)

app.get("/",(req,res)=>{
    res.send("HomePage")
});


app.listen(PORT,async()=>{
    await connectDB()
    console.log(`Running on http://localhost:${PORT}`)
})