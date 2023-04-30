const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'registration'
    }
)

app.post('/registration',(req,res) => {
    const sql = "INSERT INTO student(`name`, `phone`, `school`,`class`, `rollno`,`address`)Values (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.school,
        req.body.class,
        req.body.rollno,
        req.body.address,
    ]
    db.query(sql,[values],(err,data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
)

app.listen(8081,() => {
    console.log("Listening...");
})