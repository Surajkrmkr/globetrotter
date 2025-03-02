import { IsString } from "class-validator";

export class AnswerRequest {
  @IsString()
  userName!: string;

  @IsString()
  clueHash!: string;

  @IsString()
  userAnswer!: string;
}

export class RegisterUser {
  @IsString()
  userName!: string;
}
