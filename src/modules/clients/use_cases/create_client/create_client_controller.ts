import { Request, Response } from "express";
import { CreateClientUseCase } from "./create_client_usecase";


export class CreateClientController {
    async handle(request: Request, response: Response){
        const { username, password } = request.body;
        console.log(request.body);
        
        const createClientUseCase = new CreateClientUseCase()
        const result = await createClientUseCase.execute({
            username, password 
        })

    }
}