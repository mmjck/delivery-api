import { prisma } from "../../../../database/prima_client";


export class FindAllDeliveriesUseCase {
     async execute (id_client: string) {
        const response = await prisma.clients.findMany( {
            where: {
                id: id_client
            }, 
            include: {
                deliveries: true
            }
        })

        return response;
     }
}