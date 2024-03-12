import express, { NextFunction, Request, Response }  from "express";
import { routes } from "./routes";
import "express-async-errors"
const app = express()
app.use(express.json())
app.use(routes)


app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {

    if(err instanceof Error){
        return resp.status(400).json({
            message: err.message
        })
    }

    return resp.status(400).json({
        status:"error",
        message: "Internal server error"
    })
})
app.listen(3000, () => {
    console.log("Server is running ")
})