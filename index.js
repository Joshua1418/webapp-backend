var express = require("express")
var cors = require("cors")
const mysql = require("mysql")

var app = express()
app.use(cors())
app.use(express.json())

let db=mysql.createConnection({
  host:'localhost',
  user:"root",
  database:"gest_amis",
  password:""
})

app.post("/add",(req,res)=>{ 
  db.query(`INSERT INTO amis VALUES(0, '${req.body.nom}','${req.body.postnom}', '${req.body.prenom}')`, (erreur,result) => {
    return res.json();
  })  
})

 app.get("/friends",(req,res)=>{ 
  db.query(`SELECT * FROM amis ORDER BY id DESC`, (erreur,result) => {
  return res.json(result);
  })  
})

app.post("/delete",(req,res)=>{ 
  db.query(`DELETE FROM amis WHERE id = '${req.body.id}'`, (erreur,result) => {
  return res.json(result);
  })  
})
 
 

app.listen(3000, ()=>{
  console.log("le serveur a démarré au port 3000");
})