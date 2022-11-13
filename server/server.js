const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
const port = 8080;

app.get("/",(req,res)=>{
res.send({message:"server online"})
})
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
