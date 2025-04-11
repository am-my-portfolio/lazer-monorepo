import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OllamaChatModule } from './modules/ollama/ollama.module';
import { RagModule } from './modules/rag/rag.module';
import { OpenaiModule } from './modules/openai/openai.module';
import { AgentModule } from './modules/agent/agent.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [envConfig],
    }),
    OllamaChatModule,
    RagModule,
    OpenaiModule,
    AgentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
