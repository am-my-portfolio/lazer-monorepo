import { Express } from 'express';
import { Observable } from 'rxjs';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  FileTypeValidator,
  Logger,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Sse,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

import { RagService } from './rag.service';
import { FileUploadDto } from './types/rag.dto';

@ApiTags('RAG')
@Controller('rag')
export class RagController {
  private readonly logger = new Logger(RagController.name);
  constructor(private readonly ragService: RagService) { }

  // https://js.langchain.com/docs/tutorials/rag/

  // Part 1: Indexing
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: {
        fileSize: 20000,
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Text File for Indexing by the RAG',
    type: FileUploadDto,
  })
  index(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 20000 }), new FileTypeValidator({ fileType: 'text' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.ragService.handleIndexing(file);
  }

  // Part 2: Retrieval/Generation

  @Sse('/completion/:prompt')
  completion(@Param('prompt') prompt: string): Promise<Observable<string>> {
    this.logger.debug('completion', { prompt })

    return this.ragService.invokeRag(prompt);
  }

}
