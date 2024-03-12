import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticate_client_use_case";


export class AuthenticateClientController {
    async handle(request: Request, response: Response){
        const { username, password } = request.body;
        console.log(request.body);
        
        const createClientUseCase = new AuthenticateClientUseCase()
        const result = await createClientUseCase.execute({
            username, password
        })

        return response.json(result)
    }
}