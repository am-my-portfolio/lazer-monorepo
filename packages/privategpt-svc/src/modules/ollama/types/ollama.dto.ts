import { IsString } from 'class-validator';

export class ChatCompletionRequestDto {
  @IsString()
  content: string;
}
