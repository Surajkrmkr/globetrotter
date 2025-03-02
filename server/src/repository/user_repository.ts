import { Service } from "typedi";
import { User } from "../model";

@Service()
export class UserRepository {
  updateUserScore = async (username: string, isCorrect: boolean) => {
    await User.findOneAndUpdate(
      { username },
      { $inc: { [isCorrect ? "correctAnswers" : "incorrectAnswers"]: 1 } },
      { upsert: true, new: true }
    );
  };

  getUserScore = async (username: string) => {
    const user = await User.findOne({ username });
    return user
      ? { correct: user.correctAnswers, incorrect: user.incorrectAnswers }
      : { correct: 0, incorrect: 0 };
  };

  registerUser = async (username: string) => {
    const user = await User.findOneAndUpdate(
      { username },
      { username },
      { upsert: true, new: true }
    );
    return user;
  };

  getUser = async (username: string) => {
    const user = await User.findOne({ username });
    return user;
  };
}
