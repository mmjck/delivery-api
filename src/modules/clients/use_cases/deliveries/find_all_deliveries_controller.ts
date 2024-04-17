import { Request, Response } from "express";

import { FindAllDeliveriesUseCase } from "./find_all_deliveries_usecase";

export class FindAllDeliveriesController {
    async handle(request: Request, response: Response){
        const { id_client } = request;
        const controller = new  FindAllDeliveriesUseCase()
        const deliveries = controller.execute(id_client)

        return response.json(deliveries)
    }
}
    