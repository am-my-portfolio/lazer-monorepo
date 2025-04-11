import { Test, TestingModule } from '@nestjs/testing';
import { OllamaChatService } from './ollama.service';

describe('ChatService', () => {
  let service: OllamaChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OllamaChatService],
    }).compile();

    service = module.get<OllamaChatService>(OllamaChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
