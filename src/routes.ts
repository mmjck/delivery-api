import { Router } from "express";
import { CreateClientController } from "./modules/clients/use_cases/create_client/create_client_controller";
import { AuthenticateClientController } from "./modules/account/authenticate_client/authenticate_client_controller";
import { AuthenticateDeliverymanController } from "./modules/account/authenticate_deliveryman/authenticate_deliveryman_controller";
import { CreateDeliverymanController } from "./modules/deliveryman/usecases/create_deliveryman/create_deliveryman_controller";
import { CreateDeliveryController } from "./modules/deliveries/use_cases/create_delivery/create_delivery_controller";
import { FindAllAvailableController } from "./modules/deliveries/use_cases/find_all_available/find_all_available_controller";
import { UpdateDeliverymanController } from "./modules/deliveries/use_cases/update_deliveryman/update_deliveryman_controller";
import { ensureAuthenticateClient } from "./middlewares/ensure_authenticate_client";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensure_authenticate_deliveryman";
import { FindAllDeliveriesController } from "./modules/clients/use_cases/deliveries/find_all_deliveries_controller";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/usecases/find_all_deliveries/find_all_deliveries_deliveryman_controller";

const routes = Router()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliveryManController = new AuthenticateDeliverymanController()

const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const deliveryConroller = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()


const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
routes.get("/", (res, resp) => resp.json("ola"))



routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliveryManController.handle)


routes.post("/client", createClientController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle  )

routes.post("/delivery", ensureAuthenticateClient, deliveryConroller.handle)
routes.post("/deliveryman", createDeliverymanController.handle)


routes.get("/delivery/available", ensureAuthenticateDeliveryman,findAllAvailableController.handle)
routes.get("/delivery/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.put("/delivery/update-deliveryman", updateDeliverymanController.handle)



export { routes }