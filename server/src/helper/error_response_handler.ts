import { NextFunction, Request, Response } from "express";
import {
  ExpressErrorMiddlewareInterface,
  Middleware,
} from "routing-controllers";

@Middleware({ type: "after" })
export class ErrorResponseHandler implements ExpressErrorMiddlewareInterface {
  error(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err.stack);
    const status = err.httpCode || 500;
    const errorObj = {
      success: false,
      httpCode: err.httpCode,
      message: err.message,
      errors: [],
    };
    if (err.errors && err.errors.length > 0) {
      errorObj.message = "Request validation failed";
      const validationErrors = err.errors.map((error: any) => ({
        property: error.property,
        constraints: error.constraints,
      }));
      errorObj.errors = validationErrors;
      res.status(status).json(errorObj).end();
    } else {
      res.status(err.httpCode || 500).json({
        success: false,
        httpCode: err.httpCode,
        message: err.message || "Internal server error",
        errors: [],
      });
    }
  }
}
