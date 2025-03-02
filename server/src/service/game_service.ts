import Container, { Service } from "typedi";
import { AnswerRequest } from "../entity/request";
import { GameRepository, UserRepository } from "../repository";

@Service()
class GameService {
  constructor(
    private gameRepository: GameRepository,
    private userRepository: UserRepository
  ) {
    this.gameRepository = Container.get(GameRepository);
    this.userRepository = Container.get(UserRepository);
  }

  getRandomDestination = async () => {
    const destination = await this.gameRepository.getRandomDestination();
    const choices = await this.gameRepository.getRandomOptions(
      destination.city,
      3
    );

    choices.push(destination.city);
    const shuffledOptions = choices.sort(() => 0.5 - Math.random());

    return {
      clues: destination.clues.slice(0, 2),
      options: shuffledOptions,
    };
  };

  checkAnswer = async (answerRequest: AnswerRequest) => {
    const { clueHash, userAnswer, userName } = answerRequest;

    const clues = atob(clueHash).toString().split("-");
    const destination = await this.gameRepository.getDestinationByClue(clues);
    if (!destination) return { isCorrect: false };

    const isCorrect =
      destination.city.toLowerCase() === userAnswer.toLowerCase();
    const randomFact =
      destination.fun_fact[
        Math.floor(Math.random() * destination.fun_fact.length)
      ];

    await this.userRepository.updateUserScore(userName, isCorrect);
    const score = await this.userRepository.getUserScore(userName);

    return {
      isCorrect,
      randomFact,
      correctCity: destination.city,
      score: score,
    };
  };
}

export default GameService;
