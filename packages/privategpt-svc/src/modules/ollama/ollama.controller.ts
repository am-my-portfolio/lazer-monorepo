import { Observable } from 'rxjs';
import { Controller, Sse, Param, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OllamaChatService } from './ollama.service';

@ApiTags('Private Ollama Pass-through')
@Controller('ollama')
export class OllamaChatController {
  private readonly logger = new Logger(OllamaChatController.name);
  
  constructor(private readonly chatService: OllamaChatService) {}

  @Sse('/completion/:prompt')
  completion(@Param('prompt') prompt: string): Observable<string> {
    this.logger.debug('completion', { prompt})
    
    return this.chatService.completion(prompt);
  }
}
// https://sayanbiswas.hashnode.dev/implementing-real-time-chat-messaging-with-nestjs-server-sent-events-and-nestjs-event-emitters
// https://dev.to/onepoint/nestjs-from-promises-to-observables-2gl7
