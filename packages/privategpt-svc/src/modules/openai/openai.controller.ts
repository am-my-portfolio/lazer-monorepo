import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Logger, Param, Sse } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@ApiTags('Azure OpenAI Pass-through')
@Controller('openai')
export class OpenaiController {
  private readonly logger = new Logger(OpenaiController.name);
  
  constructor(private readonly openaiService: OpenaiService) {}

  @Sse('/completion/:prompt')
  completion(@Param('prompt') prompt: string): Observable<string> {
    this.logger.debug('completion', { prompt})
    
    return this.openaiService.completion(prompt);
  }
}
