const app=require("express")();

// Hasil dari http://localhost:3000/api/lokasi dalam bentuk JSON dengan value
// Judul Artikel Wikipedia
// Preview / Content Wikipedia
// Array of image url
// Array of image owner
const api=require("./routes/app.js");
app.use("/api",api);

app.listen(3000,()=>{
    console.log("Listenning on port 3000");
})
