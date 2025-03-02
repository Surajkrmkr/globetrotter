import { InternalServerError } from "routing-controllers";
import { Service } from "typedi";
import { AppStrings } from "../constants/app_constants";
import { Destination } from "../model";

@Service()
export class GameRepository {
  getRandomDestination = async () => {
    const count = await Destination.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const destination = await Destination.findOne().skip(randomIndex);

    if (!destination) {
      throw new InternalServerError(AppStrings.destinationNotFound);
    }

    return destination;
  };

  getRandomOptions = async (city: string, count: number) => {
    const otherCities = await Destination.aggregate([
      { $match: { city: { $ne: city } } },
      { $sample: { size: count } },
      { $project: { city: 1, _id: 0 } },
    ]);

    return otherCities.map((item) => item.city);
  };

  getDestinationByClue = async (clues: string[]) => {
    const destination = await Destination.findOne({ clues: { $all: clues } });
    return destination;
  };
}
