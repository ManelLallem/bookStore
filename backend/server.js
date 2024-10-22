const express = require ("express")
const hostname = "127.0.0.1"
const PORT = 7010
const app = express()
const authRoute= require("./routes/AuthRoute")
const shopRoute = require("./routes/ShopRoute");

const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

app.use(express.json())
app.use("/", authRoute);
app.use("/Shop", shopRoute);


///// set up mongodb
const mongoose = require("mongoose")
MONGO_URI = "mongodb+srv://lallemm17:manel1717@cluster0.xbvcmav.mongodb.net/"
mongoose.connect(MONGO_URI,{dbName:"Users"})
const database = mongoose.connection
database.once("open",()=>{
    console.log("Connected to mongoDb")
})


app.listen(PORT, hostname,()=>{
    console.log("Listening to port  :",PORT)
})