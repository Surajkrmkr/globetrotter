import Container, { Service } from "typedi";
import { RegisterUser } from "../entity/request/game";
import { UserRepository } from "../repository";
import { BadRequestError } from "routing-controllers";
import { AppStrings } from "../constants/app_constants";
import { AppUtils } from "../utils";
import { Invite } from "../model";

@Service()
class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = Container.get(UserRepository);
  }

  registerUser = async (user: RegisterUser) => {
    return await this.userRepository.registerUser(user.userName);
  };

  inviteUser = async (invitedUser: RegisterUser) => {
    const user = await this.userRepository.getUser(invitedUser.userName);
    if (!user) throw new BadRequestError(AppStrings.userIsNotFound);

    const inviteCode = AppUtils.generateCode();
    const invite = new Invite({ inviteCode, inviter: user._id });
    await invite.save();

    const inviteLink = `https://yourapp.com/invite/${inviteCode}`;
    return inviteLink;
  };

  getInviteDetails = async (code: string) => {
    const invite = await Invite.findOne({ code }).populate("inviter");
    if (!invite) throw new BadRequestError(AppStrings.codeIsNotValid);
    return invite;
  };
}

export default UserService;
