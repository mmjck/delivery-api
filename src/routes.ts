import { Router } from "express";
import { CreateClientController } from "./modules/clients/use_cases/create_client/create_client_controller";
import { AuthenticateClientController } from "./modules/account/authenticate_client/authenticate_client_controller";
import { AuthenticateDeliverymanController } from "./modules/account/authenticate_deliveryman/authenticate_deliveryman_controller";
import { CreateDeliverymanController } from "./modules/deliveryman/usecases/create_deliveryman/create_deliveryman_controller";

const routes = Router()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliveryManController = new AuthenticateDeliverymanController()

const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()


routes.get("/", (res, resp) => resp.json("ola"))



routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliveryManController.handle)


routes.post("/client", createClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)


export { routes }