import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./find_all_available_use_case";


export class FindAllAvailableController {
    async handle(request: Request, response: Response) {
        const useCase = new FindAllAvailableUseCase()

        const deliveries = await useCase.execute()

        return response.json(deliveries)
    }
}