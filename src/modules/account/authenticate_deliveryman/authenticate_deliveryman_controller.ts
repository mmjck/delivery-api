import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./authenticate_deliveryman_use_case";


export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response){
        const { username, password } = request.body;
        const createDeliveryManUseCase = new AuthenticateDeliverymanUseCase()
        const result = await createDeliveryManUseCase.execute({
            username, password
        })

        return response.json(result)
    }
}