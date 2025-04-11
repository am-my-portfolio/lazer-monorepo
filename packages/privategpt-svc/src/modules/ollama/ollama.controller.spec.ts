import { Test, TestingModule } from '@nestjs/testing';
import { OllamaChatController } from './ollama.controller';
import { OllamaChatService } from './ollama.service';

describe('ChatController', () => {
  let controller: OllamaChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OllamaChatController],
      providers: [OllamaChatService],
    }).compile();

    controller = module.get<OllamaChatController>(OllamaChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
