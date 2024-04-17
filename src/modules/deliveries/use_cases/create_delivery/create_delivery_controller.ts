import { CreateDeliveryUseCase } from "./create_delivery_use_case";
import { Request, Response } from "express";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const useCase = new CreateDeliveryUseCase()
        const { item_name } = request.body
        const { id_client } = request

        const delivery = await useCase.execute({ id_client , item_name })
        return response.json(delivery)
    }
} 