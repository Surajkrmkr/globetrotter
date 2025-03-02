import { Body, Get, JsonController, Post } from "routing-controllers";
import { Container } from "typedi";
import { ControllerResponse } from "../config/interfaces";
import { AppStrings } from "../constants/app_constants";
import { AnswerRequest } from "../entity/request";
import { GameService } from "../service";

@JsonController("/game")
export class GameController {
  constructor(private gameService: GameService) {
    this.gameService = Container.get(GameService);
  }

  @Get("/destination")
  async getDestination(): Promise<ControllerResponse> {
    const destination = await this.gameService.getRandomDestination();
    const response = {
      message: AppStrings.desinationClueFetched,
      data: destination,
    };
    return response;
  }

  @Post("/answer")
  async answerClue(
    @Body() answerRequest: AnswerRequest
  ): Promise<ControllerResponse> {
    const answer = await this.gameService.checkAnswer(answerRequest);
    const response = {
      message: AppStrings.answerClue,
      data: answer,
    };
    return response;
  }
}
