const app=require("express")();
const cors = require('cors');

// Hasil dari http://localhost:3000/api/lokasi dalam bentuk JSON dengan value
// Judul Artikel Wikipedia
// Preview / Content Wikipedia
// Array of image url
// Array of image owner
app.use(cors())
const api=require("./routes/api");
app.use("/api",api);

// const landing=require("./routes/index");
// app.use("/",landing);
//
// const result=require("./routes/result");
// app.use("/result",result);

app.listen(3000,()=>{
    console.log("Listenning on port 3000");
})
