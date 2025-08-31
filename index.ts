import express from "express"

const app = express();
app.use(express.json());

app.get("/", (req, res)=> res.status(200).json("hello world"));

app.get("/cpu", (req, res)=> {
    for(let i = 0; i < 100000000; i++){
        Math.random();
    }
    res.status(200).json("hello world");
})

app.listen(3000, ()=> console.log("server is running on port 3000"));