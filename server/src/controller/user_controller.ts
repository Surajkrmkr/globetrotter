import "reflect-metadata";
import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { UserService } from "../service";
import Container from "typedi";
import { RegisterUser } from "../entity/request/game";
import { AppStrings } from "../constants/app_constants";

@JsonController("/user")
export class UserController {
  constructor(private userService: UserService) {
    this.userService = Container.get(UserService);
  }

  @Post("/register")
  register(@Body() registerUser: RegisterUser) {
    const isRegistered = this.userService.registerUser(registerUser);
    return {
      message: AppStrings.userIsRegistered,
      data: isRegistered,
    };
  }

  @Post("/invite")
  invite(@Body() inviteUser: RegisterUser) {
    const inviteLink = this.userService.inviteUser(inviteUser);
    return {
      message: AppStrings.userIsInvited,
      data: inviteLink,
    };
  }

  @Get("/invite/:inviteCode")
  inviteDetails(@Param("inviteCode") code: string) {
    const details = this.userService.getInviteDetails(code);
    return {
      message: AppStrings.codeIsValid,
      data: details,
    };
  }
}
