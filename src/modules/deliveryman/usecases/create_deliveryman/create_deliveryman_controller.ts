import { Request, Response } from "express";
import { CreateDeliveryManUseCase } from "./create_deliveryman_usecase";


export class CreateDeliveryManController {
    async handle(request: Request, response: Response){
        const { username, password } = request.body;

        const controller = new CreateDeliveryManUseCase()
        const result = await controller.execute({
            username, password
        })

        return response.json(result)
    }
}