import { prisma } from "../../../../database/prima_client";


export class FindAllDeliveriesDeliverymanUseCase {
     async execute (id_client: string) {
        const response = await prisma.deliveryman.findMany( {
            where: {
                id: id_client
            }, 
            select: {
                deliveries: true,
                id: true,
                username: true,
            }
        })

        return response;
     }
}