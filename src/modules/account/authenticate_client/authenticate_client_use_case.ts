import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/prima_client"
import { compare } from "bcrypt"


interface IAuthenticateClient {
    username: string
    password: string
}


export class AuthenticateClientUseCase {
    async execute({ username, password}: IAuthenticateClient){
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })


        if (!client) {
            throw new Error("Username or password invalid")
        }


        const passwordMatch = await compare(password, client.password)
        
        
        if(!passwordMatch) {
            throw new Error("Username or password invalid")
        }

        const token = sign({username}, "019acc25a4e242bb55ad489832ada12d", {
            subject: client.id,
            expiresIn: "1d"

        })

        return token
    }
}