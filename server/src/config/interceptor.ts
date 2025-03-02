import { Action, Interceptor, InterceptorInterface } from "routing-controllers";
import { Service } from "typedi";
import { ControllerResponse } from "./interfaces";

@Interceptor()
@Service()
export class CustomInterceptor implements InterceptorInterface {
  intercept(action: Action, content: ControllerResponse): any {
    const { method, url } = action.request;
    console.log(`Request: ${method} ${url}`);

    if (content instanceof Promise) {
      return content.then((result) => {
        console.log(`Response: ${action.response.statusCode}`);
        return {
          success: true,
          statusCode: 200,
          message: result.message
            ? result.message
            : "Request executed successfully",
          data: result.data ? result.data : {},
        };
      });
    }

    console.log(`Response: ${action.response.statusCode}`);
    return {
      success: true,
      statusCode: 200,
      message: content.message
        ? content.message
        : "Request executed successfully",
      data: content.data ? content.data : {},
    };
  }
}
