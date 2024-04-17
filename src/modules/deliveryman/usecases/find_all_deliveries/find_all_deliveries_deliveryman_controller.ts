import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./find_all_deliveries_deliveryman_usecase";


export class FindAllDeliveriesDeliverymanController {
    async handle(request: Request, response: Response){
        const { id_client } = request;
        const controller = new  FindAllDeliveriesDeliverymanUseCase()
        const deliveries = controller.execute(id_client)

        return response.json(deliveries)
    }
}
    