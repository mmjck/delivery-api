import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./update_deliveryman_use_case";



export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request.body;

        const { id:  id_delivery } = request.params
        const useCase = new UpdateDeliverymanUseCase()
        const result = await useCase.execute({ id_delivery, id_deliveryman })

        return response.json(result)
    }
}