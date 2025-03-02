import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { Express } from "express";
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import * as swaggerUiExpress from "swagger-ui-express";

export function setupSwagger(app: Express) {
  const storage = getMetadataArgsStorage();
  const schemas = validationMetadatasToSchemas({
    refPointerPrefix: "#/components/schemas/",
  });
  const spec = routingControllersToSpec(
    storage,
    { routePrefix: "/api/v1.0" },
    {
      info: {
        title: "Globetrotter API",
        description: "API documentation",
        version: "1.0.0",
      },
      components: {
        schemas: schemas as { [schema: string]: { [key: string]: any } },
      },
      security: [{ bearerAuth: [] }],
    }
  );

  app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(spec));
}
