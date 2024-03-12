import { Router } from "express";
import { CreateClientController } from "./modules/clients/use_cases/create_client/create_client_controller";
import { AuthenticateClientController } from "./modules/account/authenticate_client/authenticate_client_controller";
import { CreateDeliveryManController } from "./modules/deliveryman/usecases/create_deliveryman/create_deliveryman_controller";

const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryManController = new CreateDeliveryManController()


routes.get("/", (res, resp) => resp.json("ola"))



routes.post("/authenticate", authenticateClientController.handle)
routes.post("/client", createClientController.handle)

routes.post("/deliveryman", createDeliveryManController.handle)


export { routes }