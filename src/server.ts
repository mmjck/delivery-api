import  express  from "express";


const app = express()


app.get("/", (reqt, res) => {
    return res.json({
        message: "Hello world"
    })
})

app.listen(3000, () => {
    console.log("Server is running ")
})