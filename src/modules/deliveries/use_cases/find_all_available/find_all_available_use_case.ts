import { prisma } from "../../../../database/prima_client";

export class FindAllAvailableUseCase {
    async execute() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            }
        })

        return deliveries
    }
}