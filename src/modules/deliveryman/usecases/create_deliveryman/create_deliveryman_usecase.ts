import { prisma } from "../../../../database/prima_client"
import { hash } from "bcrypt"

interface IDeliveryMan {
    username: string
    password: string
}

export class CreateDeliveryManUseCase {
    async execute({ password, username }: IDeliveryMan) {
        const deliverymanExist = await prisma.deliveryman.findFirst({
            where:
            {
                username : {
                    mode: "insensitive"
                }
            }
        })

        
        if (deliverymanExist){
            throw new Error("Deliveryman already exists")
        }

        const hashPassword = await hash(password, 10)

        const client = await prisma.deliveryman.create({
            data: {
                username,
                password : hashPassword
            }
        })
        
        
        return client
    }
}