import { Express } from "express";
import {
  RoutingControllersOptions,
  createExpressServer,
} from "routing-controllers";
import * as controllers from "../controller";
import { ErrorResponseHandler } from "../helper/error_response_handler";
import { AppUtils } from "../utils";
import { CustomInterceptor } from "./interceptor";
import { setupSwagger } from "./swagger";

const serverConfig: RoutingControllersOptions = {
  controllers: AppUtils.dictToArray(controllers),

  cors: "*",

  interceptors: [CustomInterceptor],

  middlewares: [ErrorResponseHandler],

  defaultErrorHandler: false,

  routePrefix: "/api/v1.0",
};
const app: Express = createExpressServer(serverConfig);

setupSwagger(app);

export default app;
