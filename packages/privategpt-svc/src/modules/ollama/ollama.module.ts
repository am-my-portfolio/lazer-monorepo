import { Module } from '@nestjs/common';
import { OllamaChatService } from './ollama.service';
import { OllamaChatController } from './ollama.controller';

@Module({
  controllers: [OllamaChatController],
  providers: [OllamaChatService],
})
export class OllamaChatModule {}
