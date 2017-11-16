const app=require("express")();
const parser=require("body-parser");
const env=require("dotenv").config();
const cors=require("cors");

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.use(cors());

// Hasil dari http://localhost:3000/api/lokasi dalam bentuk JSON dengan value
// Judul Artikel Wikipedia
// Preview / Content Wikipedia
// Array of image url
// Array of image owner
const api=require("./routes/api.js");
app.use("/api",api);

const loginAction=require("./routes/user");
app.use("/login",loginAction);

app.listen(3000,()=>{
    console.log("Listenning on port 3000");
});
